'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppProps } from 'next/app';
import './globals.css';
import { ArcanaCard } from './Card';
import RevealedCards from './RevealedCards';
import ResetButton from './ResetButton';


function Home() {
  return (
    <Provider store={store}>
      {/* Full-screen container */}
      <div className="flex flex-col items-center justify-center h-screen">

        {/* Container for ArcanaCard - Centered Horizontally and Vertically */}
        <div className="flex justify-center items-center w-full mb-5 ">
          <ArcanaCard />
        </div>

        

        {/* Container for RevealedCards - Full width and scrollable */}
        <div className="w-full overflow-y-auto"  style={{ maxHeight: '35%' } }>
          <RevealedCards />
        </div>

        {/* Reset Button - Positioned at bottom left */}
        <div>
          <ResetButton />
        </div>
      </div>
    </Provider>
  );
}

export default Home;

