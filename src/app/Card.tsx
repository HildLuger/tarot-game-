// src/components/Card.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, resetGame } from './slices/arcanaSlice';
import { RootState } from './store';
import styles from './Card.module.css';

export const ArcanaCard = () => {
  const dispatch = useDispatch();
  const [isFlipping, setIsFlipping] = useState(false);
  const { currentCard, allCardsRevealed } = useSelector((state: RootState) => state.arcana);

  const handleFlip = () => {
    if (!allCardsRevealed && !isFlipping) {
      setIsFlipping(true); // Start flip animation immediately

      // Change content halfway through the flip (600ms into a 1.2s animation)
      setTimeout(() => {
        dispatch(flipCard());

        // End of flip
        setTimeout(() => {
          setIsFlipping(false);
        }, 300); // Remaining time of the flip
      }, 500);
    }
  };

  return (
    <div className={styles.arcanaContainer}>
      <div onClick={handleFlip} className={`${styles.card} ${isFlipping ? styles.flipped : ''}`}>
        <Image 
          src={`/${currentCard}`} 
          alt="Tarot Card"
          width={200}
          height={400}
          className={styles.cardImage}
          loading="eager" 
          priority={currentCard === "Arcana0.jpg"} // Add priority if the current card is Arcana0.jpg
        
        />
      </div >
      {allCardsRevealed && (
        <div className= " text-sm rounded-lg text-center">
        
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
