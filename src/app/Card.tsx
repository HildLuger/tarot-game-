import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, resetGame } from './slices/arcanaSlice';
import { RootState } from './store';
import styles from './Card.module.css';

export const ArcanaCard = () => {
  const dispatch = useDispatch();
  const [isFlipping, setIsFlipping] = useState(false);
  const { currentCard, allCardsRevealed } = useSelector((state: RootState) => state.arcana);

  // Generate an array with the paths of all 79 cards
  const cardImages = Array.from({ length: 79 }, (_, i) => `/Arcana${i}.jpg`);

  useEffect(() => {
    // Preload all card images
    cardImages.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
    });
  }, []);

  const handleFlip = () => {
    if (!allCardsRevealed && !isFlipping) {
      setIsFlipping(true); // Start flip animation immediately

      setTimeout(() => {
        dispatch(flipCard());

        setTimeout(() => {
          setIsFlipping(false);
        }, 300); // Remaining time of the flip
      }, 500);
    }
  };

  return (
    <div className={styles.arcanaContainer}>
      <Head>
        {/* Optionally preload the first few images */}
        {cardImages.slice(0, 5).map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>
      <div onClick={handleFlip} className={`${styles.card} ${isFlipping ? styles.flipped : ''}`}>
        <Image 
          src={`/${currentCard}`} 
          alt="Tarot Card"
          width={200}
          height={400}
          className={styles.cardImage}
          loading="eager"
          priority={currentCard === "Arcana0.jpg"}
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
