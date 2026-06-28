import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Link from 'next/link';

const SLIDE_MS = 500;
const FADE_MS = 350;

export const RevealedCards = () => {
  const { revealedCards, displayedCount } = useSelector((state: RootState) => state.arcana);
  const endOfListRef = useRef<HTMLDivElement>(null);
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

    newRects.forEach((newRect, key) => {
      const el = refs.get(key);
      if (!el) return;
      const oldRect = prevRects.current.get(key);

      if (oldRect) {
        const dx = oldRect.x - newRect.x;
        const dy = oldRect.y - newRect.y;
        if (dx || dy) {
          // Invert: jump back to the old position, then play to the new one.
          el.style.transition = 'none';
          el.style.transform = `translate(${dx}px, ${dy}px)`;
          void el.offsetWidth; // force reflow so the transition takes effect
          requestAnimationFrame(() => {
            el.style.transition = `transform ${SLIDE_MS}ms ease-in-out`;
            el.style.transform = 'translate(0, 0)';
          });
        }
      } else {
        // Newly added card: fade in only after the others have finished sliding,
        // so it doesn't overlap them while transparent.
        el.style.opacity = '0';
        void el.offsetWidth;
        requestAnimationFrame(() => {
          el.style.transition = `opacity ${FADE_MS}ms ease-in-out ${SLIDE_MS}ms`;
          el.style.opacity = '1';
        });
      }
    });

    prevRects.current = newRects;
  }, [displayedCount]);

  useEffect(() => {
    // Scroll to the new element at the end of the list whenever a card is shown
    endOfListRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      <div ref={endOfListRef} />
    </div>
  );
};

export default RevealedCards;
