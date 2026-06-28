import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, revealComplete, resetGame } from './slices/arcanaSlice';
import { RootState } from './store';
import styles from './Card.module.css';
import ThreeCard from './ThreeCard';

export const ArcanaCard = () => {
  const dispatch = useDispatch();
  const [isFlipping, setIsFlipping] = useState(false);
  const { currentCard, allCardsRevealed, revealedCards, displayedCount } = useSelector((state: RootState) => state.arcana);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevTop = useRef<number | null>(null);

  // Generate an array with the paths of all 79 cards
  const cardImages = Array.from({ length: 79 }, (_, i) => `/Arcana${i}.jpg`);

  useEffect(() => {
    // Preload all card images
    cardImages.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
    });
  }, []);

  // Smoothly slide the main card up when the revealed-cards list grows and
  // re-centers the layout (e.g. after the first reveal).
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const newTop = el.getBoundingClientRect().top;
    if (prevTop.current !== null) {
      const dy = prevTop.current - newTop;
      if (dy) {
        el.style.transition = 'none';
        el.style.transform = `translateY(${dy}px)`;
        void el.offsetWidth; // force reflow
        requestAnimationFrame(() => {
          el.style.transition = 'transform 500ms ease-in-out';
          el.style.transform = 'translateY(0)';
        });
      }
    }
    prevTop.current = newTop;
  }, [displayedCount]);

  // A single 180° turn keeps the original speed (0.8s). The first reveal (card
  // starts on its cover) is a single turn; later reveals are two turns (1.6s):
  // turn to the cover, swap the image, turn back.
  const TURN_DURATION = 800;

  const handleFlip = () => {
    if (!allCardsRevealed && !isFlipping) {
      const isFirstReveal = revealedCards.length === 0;
      const total = isFirstReveal ? TURN_DURATION : TURN_DURATION * 2;

      setIsFlipping(true); // Start the reveal

      // Reveal the next card before the hidden midpoint so the 3D card can swap
      // the texture while it is turned away from the viewer.
      setTimeout(() => {
        dispatch(flipCard());
      }, 150);

      // End the interaction after the reveal completes, and only then release
      // the card to the revealed-cards list.
      setTimeout(() => {
        setIsFlipping(false);
        dispatch(revealComplete());
      }, total);
    }
  };

  return (
    <div className={styles.arcanaContainer} ref={containerRef}>
      <Head>
        {/* Optionally preload the first few images */}
        {cardImages.slice(0, 5).map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>
      <div onClick={handleFlip} className={styles.card}>
        <ThreeCard
          frontSrc={`/${currentCard}`}
          backSrc="/Arcana0.jpg"
          isFlipping={isFlipping}
          flipDuration={TURN_DURATION}
          revealedCount={revealedCards.length}
        />
      </div>
      {allCardsRevealed && (
        <div className="text-sm rounded-lg text-center">
          <button 
            onClick={() => dispatch(resetGame())} 
            className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors absolute bottom-20 right-10"
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
};

export default ArcanaCard;
