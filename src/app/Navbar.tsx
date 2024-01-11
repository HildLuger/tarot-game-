'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'

const SunIcon = '/sun.svg'; // Your sun icon path
const MoonIcon = '/moon.svg'; // Your moon icon path

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); // Default state set to false

  useEffect(() => {
      // Update state based on local storage or user preference
      const storedMode = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : null;
      setDarkMode(storedMode === 'true');
  }, []);

  useEffect(() => {
      // Update local storage and document class based on darkMode state
      localStorage.setItem('darkMode', darkMode.toString());
      if (darkMode) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
  }, [darkMode]);

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
  };

  return (
      <nav className="navbar fixed top-0 left-0 w-full p-1 mt-0 pr-5 pl-5 z-10 text-gray-600 bg-custom-blue dark:bg-custom-purple dark:border-gray-700">
          <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                  {/* Navigation Links */}
                  <Link href="/" passHref>
                      <span className="text-purple-600 dark:text-white cursor-pointer mr-3">☆Home☆</span>
                  </Link>
                  <Link href="/arcana" passHref>
                      <span className="text-gray-600 dark:text-gray-400 cursor-pointer">Arcana</span>
                  </Link>
              </div>
              
              {/* Dark Mode Toggle Button */}
              <button onClick={toggleDarkMode} className="flex items-center">
                  <Image 
                      src={darkMode ? MoonIcon : SunIcon} 
                      alt={darkMode ? 'Light Mode' : 'Dark Mode'} 
                      width={40}
                      height={40}
                      className="icon" // Class from global CSS
                  />
              </button>
          </div>
      </nav>
  );
};

export default Navbar;