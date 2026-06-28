'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCardProps {
  /** Path of the revealed card image (the tarot face). */
  frontSrc: string;
  /** Path of the card back / cover (e.g. "/Arcana0.jpg"). */
  backSrc: string;
  /** When this turns true, one reveal is played. */
  isFlipping: boolean;
  /** Duration of a single 180° turn in ms. A full (double) reveal takes 2x this. */
  flipDuration?: number;
  /** Number of revealed cards; used to reset the card to its cover on a new game. */
  revealedCount?: number;
  /** Total number of Arcana images to preload (Arcana0..ArcanaN-1). */
  totalCards?: number;
}

// Card face aspect ratio (matches the old 180x360 / 7rem x 14rem layout).
const CARD_HEIGHT = 3.6;
const CARD_WIDTH = 1.8;

const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

// Two back-to-back ease-in-out segments: one ease-in-out per 180° turn, so each
// turn keeps the original speed/feel within a single continuous reveal.
const doubleEaseInOut = (t: number) =>
  t < 0.5 ? 0.5 * easeInOutQuad(t * 2) : 0.5 + 0.5 * easeInOutQuad(t * 2 - 1);

export const ThreeCard: React.FC<ThreeCardProps> = ({
  frontSrc,
  backSrc,
  isFlipping,
  flipDuration = 800,
  revealedCount = 0,
  totalCards = 79,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Persisted three.js objects.
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const groupRef = useRef<THREE.Group>();
  const frontMatRef = useRef<THREE.MeshBasicMaterial>();
  const backMatRef = useRef<THREE.MeshBasicMaterial>();
  const textureCache = useRef<Map<string, THREE.Texture>>(new Map());

  // Animation state shared with the render loop. `pending` is the next card
  // texture; it is applied to the (hidden) tarot face at the midpoint so the
  // image change is never seen. `double` selects single vs. double turn.
  const anim = useRef<{
    active: boolean;
    start: number;
    from: number;
    to: number;
    duration: number;
    double: boolean;
    pending: string | null;
    applied: boolean;
  }>({
    active: false,
    start: 0,
    from: 0,
    to: 0,
    duration: 0,
    double: false,
    pending: null,
    applied: false,
  });

  const wasFlipping = useRef(false);
  const frameRef = useRef<number>();

  // ---- Texture loading / caching helper ----
  const loadTexture = (src: string, onLoad?: (t: THREE.Texture) => void): THREE.Texture => {
    const cache = textureCache.current;
    const existing = cache.get(src);
    if (existing) {
      if (onLoad && existing.image) onLoad(existing);
      return existing;
    }
    const texture = new THREE.TextureLoader().load(
      src,
      onLoad ? () => onLoad(texture) : undefined,
    );
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    cache.set(src, texture);
    return texture;
  };

  // ---- Scene setup (runs once) ----
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 180;
    const height = mount.clientHeight || 360;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000000, 0); // transparent, blends with the page
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const group = new THREE.Group();
    // The card rests showing the cover; keep it hidden until the cover image
    // has actually loaded so we never flash a black plane.
    group.rotation.y = Math.PI;
    group.visible = false;
    groupRef.current = group;
    scene.add(group);

    const geometry = new THREE.PlaneGeometry(CARD_WIDTH, CARD_HEIGHT);

    // Cover texture gates the first paint: reveal the card once it loads.
    const coverTexture = loadTexture(backSrc, () => {
      group.visible = true;
    });
    if (coverTexture.image) group.visible = true;

    // Front face: the revealed tarot card (changes each reveal).
    const frontMat = new THREE.MeshBasicMaterial({
      map: loadTexture(frontSrc),
      side: THREE.FrontSide,
    });
    frontMatRef.current = frontMat;
    const frontMesh = new THREE.Mesh(geometry, frontMat);
    frontMesh.position.z = 0.01;
    group.add(frontMesh);

    // Back face: the fixed cover, seen while the card turns over.
    const backMat = new THREE.MeshBasicMaterial({
      map: coverTexture,
      side: THREE.FrontSide,
    });
    backMatRef.current = backMat;
    const backMesh = new THREE.Mesh(geometry, backMat);
    backMesh.rotation.y = Math.PI;
    backMesh.position.z = -0.01;
    group.add(backMesh);

    // Preload every Arcana texture so the card never waits on a download/decode.
    for (let i = 0; i < totalCards; i++) {
      loadTexture(`/Arcana${i}.jpg`);
    }

    // ---- Render loop ----
    const renderLoop = (now: number) => {
      const a = anim.current;
      if (a.active) {
        const t = Math.min((now - a.start) / a.duration, 1);
        const eased = a.double ? doubleEaseInOut(t) : easeInOutQuad(t);
        group.rotation.y = a.from + eased * (a.to - a.from);

        // Swap the tarot texture at the hidden midpoint so the new card is ready
        // as it turns into view.
        if (a.pending && !a.applied && t >= 0.5) {
          const mat = frontMatRef.current;
          if (mat) {
            mat.map = loadTexture(a.pending);
            mat.needsUpdate = true;
          }
          a.applied = true;
        }

        if (t >= 1) {
          a.active = false;
          group.rotation.y = a.to % (Math.PI * 2);
          if (a.pending && !a.applied) {
            const mat = frontMatRef.current;
            if (mat) {
              mat.map = loadTexture(a.pending);
              mat.needsUpdate = true;
            }
          }
          a.pending = null;
        }
      }
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(renderLoop);
    };
    frameRef.current = requestAnimationFrame(renderLoop);

    // ---- Resize handling ----
    const handleResize = () => {
      const w = mount.clientWidth || width;
      const h = mount.clientHeight || height;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      geometry.dispose();
      frontMat.dispose();
      backMat.dispose();
      textureCache.current.forEach((tex) => tex.dispose());
      textureCache.current.clear();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When the revealed card changes during a turn, buffer it and let the render
  // loop swap it at the hidden midpoint. Outside of a turn, apply immediately.
  useEffect(() => {
    if (anim.current.active) {
      anim.current.pending = frontSrc;
      anim.current.applied = false;
      return;
    }
    const mat = frontMatRef.current;
    if (!mat) return;
    mat.map = loadTexture(frontSrc);
    mat.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frontSrc]);

  // Keep the cover texture in sync.
  useEffect(() => {
    const mat = backMatRef.current;
    if (!mat) return;
    mat.map = loadTexture(backSrc);
    mat.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backSrc]);

  // On a new game (no cards revealed), turn the card back to its cover.
  useEffect(() => {
    if (revealedCount !== 0) return;
    const group = groupRef.current;
    if (group) group.rotation.y = Math.PI;
    anim.current.active = false;
    const mat = frontMatRef.current;
    if (mat) {
      mat.map = loadTexture(frontSrc);
      mat.needsUpdate = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealedCount]);

  // Trigger a reveal on the rising edge of isFlipping. If the cover is currently
  // facing the viewer (start of game / after reset) a single 180° turn reveals
  // the card; otherwise a full 360° (two 180° turns) is used.
  useEffect(() => {
    if (isFlipping && !wasFlipping.current) {
      const group = groupRef.current;
      const from = group ? group.rotation.y : Math.PI;
      const norm = ((from % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const coverFacing = Math.abs(norm - Math.PI) < Math.PI / 2;
      const isDouble = !coverFacing;
      anim.current = {
        active: true,
        start: performance.now(),
        from,
        to: from + (isDouble ? Math.PI * 2 : Math.PI),
        duration: isDouble ? flipDuration * 2 : flipDuration,
        double: isDouble,
        pending: null,
        applied: false,
      };
    }
    wasFlipping.current = isFlipping;
  }, [isFlipping, flipDuration]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeCard;
