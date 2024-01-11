import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Link from 'next/link';

export const RevealedCards = () => {
  const { revealedCards } = useSelector((state: RootState) => state.arcana);
  const endOfListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the new element at the end of the list whenever revealedCards changes
    endOfListRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [revealedCards]);

  // Function to extract section number from filename
  const getSectionNumber = (filename: string) => {
    const match = filename.match(/\d+/); // Extracts the first sequence of digits
    return match ? match[0] : null; // Returns the section number
  };

  return (
    <div className="revealed-cards">
      {revealedCards.map((cardInfo, index) => {
        const sectionNumber = getSectionNumber(cardInfo.filename);

        return (
          <Link href={`/arcana#section${sectionNumber}`} key={index} passHref>
            <div style={{ cursor: 'pointer' }} className={cardInfo.hasRedBorder ? 'border-red-700 border-2' : ''}>
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
