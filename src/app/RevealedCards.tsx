import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Link from 'next/link';

// Side cards slide quickly; the new card fades in (after the slide, when
// neighbors are actually moving) so nothing snaps abruptly.
const SLIDE_MS = 400;
const FADE_MS = 350;
const SCROLL_MS = 600;

// Eased, controlled scroll so revealing a new row glides instead of jumping.
const smoothScrollTo = (el: HTMLElement, to: number, duration: number) => {
  const start = el.scrollTop;
  const change = to - start;
  if (Math.abs(change) < 1) return;
  const startTime = performance.now();
  const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const step = (now: number) => {
    const t = Math.min((now - startTime) / duration, 1);
    el.scrollTop = start + change * ease(t);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

export const RevealedCards = () => {
  const { revealedCards, displayedCount } = useSelector((state: RootState) => state.arcana);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track each card element and its previous position for FLIP animations.
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevRects = useRef<Map<string, { x: number; y: number }>>(new Map());

  // Only show cards whose reveal animation has finished.
  const displayedCards = revealedCards.slice(0, displayedCount);

  const setItemRef = (key: string) => (el: HTMLDivElement | null) => {
    if (el) {
      itemRefs.current.set(key, el);
    } else {
      itemRefs.current.delete(key);
    }
  };

  // FLIP: slide existing cards smoothly from their old positions to their new
  // ones as the layout re-centers, then fade the newly revealed card in. All
  // positions are measured relative to the container so scrolling can't add a
  // spurious vertical offset.
  useLayoutEffect(() => {
    const refs = itemRefs.current;
    const container = containerRef.current;
    if (!container) return;
    const base = container.getBoundingClientRect();

    const newRects = new Map<string, { x: number; y: number }>();
    refs.forEach((el, key) => {
      const r = el.getBoundingClientRect();
      newRects.set(key, { x: r.left - base.left, y: r.top - base.top });
    });

    // First pass: slide existing cards and note whether any actually moved.
    let anySlide = false;
    const newKeys: string[] = [];
    newRects.forEach((newRect, key) => {
      const el = refs.get(key);
      if (!el) return;
      const oldRect = prevRects.current.get(key);

      if (!oldRect) {
        newKeys.push(key);
        return;
      }
      const dx = oldRect.x - newRect.x;
      const dy = oldRect.y - newRect.y;
      if (dx || dy) {
        anySlide = true;
        // Invert: jump back to the old position, then play to the new one.
        el.style.transition = 'none';
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        void el.offsetWidth; // force reflow so the transition takes effect
        requestAnimationFrame(() => {
          el.style.transition = `transform ${SLIDE_MS}ms ease-in-out`;
          el.style.transform = 'translate(0, 0)';
        });
      }
    });

    // Second pass: fade newly added cards in at a constant size. If neighbors
    // are sliding (same-row reflow) wait for them; if a new row opened (no
    // slide), fade in immediately so the row doesn't sit empty for a beat.
    const enterDelay = anySlide ? SLIDE_MS : 0;
    newKeys.forEach((key) => {
      const el = refs.get(key);
      if (!el) return;
      el.style.transition = 'none';
      el.style.opacity = '0';
      void el.offsetWidth;
      requestAnimationFrame(() => {
        el.style.transition = `opacity ${FADE_MS}ms ease-in-out ${enterDelay}ms`;
        el.style.opacity = '1';
      });
    });

    prevRects.current = newRects;
  }, [displayedCount]);

  useEffect(() => {
    // Smoothly scroll the list's own scroll container to the bottom so a newly
    // created row glides into view instead of snapping.
    const scroller = containerRef.current?.parentElement;
    if (!scroller) return;
    const target = scroller.scrollHeight - scroller.clientHeight;
    if (target <= 0) return;
    smoothScrollTo(scroller, target, SCROLL_MS);
  }, [displayedCount]);

  // Function to extract section number from filename
  const getSectionNumber = (filename: string) => {
    const match = filename.match(/\d+/); // Extracts the first sequence of digits
    return match ? match[0] : null; // Returns the section number
  };

  return (
    <div className="revealed-cards" ref={containerRef}>
      {displayedCards.map((cardInfo, index) => {
        const sectionNumber = getSectionNumber(cardInfo.filename);

        return (
          <Link href={`/arcana#section${sectionNumber}`} key={cardInfo.filename} passHref>
            <div
              ref={setItemRef(cardInfo.filename)}
              style={{ cursor: 'pointer' }}
              className={cardInfo.hasRedBorder ? 'border-red-700 border-2' : ''}
            >
            <Image 
                src={`/${cardInfo.filename}`} 
                alt={`Revealed Card ${index}`} 
                width={100} 
                height={200} 
                loading="eager"  // Added eager loading here
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RevealedCards;
