// src/components/ResetButton.tsx
import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { resetGame } from './slices/arcanaSlice'; // Adjust the import path as needed
import styles from './ResetButton.module.css'; // Assuming you will create a separate CSS module for this

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <button onClick={handleReset} className={styles.resetButton}>
      <Image 
        src='/reloadLightMode.svg'
        alt="Reset Game"
        width={25}
        height={25}
      />
    </button>
  );
};

export default ResetButton;
