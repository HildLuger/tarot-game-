'use client';

import React, { useRef, useState } from 'react';
import { findMatches } from './cardNames';

export default function ArcanaSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const blurTimer = useRef<ReturnType<typeof setTimeout>>();

  const matches = query ? findMatches(query) : [];

  const goTo = (num: number) => {
    const el = document.getElementById(`section${num}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matches[0]) goTo(matches[0].num);
  };

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-20 mt-1 w-[min(72vw,360px)]">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            // Delay so a suggestion click registers before closing.
            blurTimer.current = setTimeout(() => setOpen(false), 150);
          }}
          placeholder="Search a card…"
          aria-label="Search a tarot card"
          className="w-full px-3 py-1 rounded outline-none border border-gray-400 dark:border-gray-600 bg-custom-blue dark:bg-custom-purple text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
        />
      </form>

      {open && matches.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 max-h-72 overflow-y-auto rounded border border-gray-400 dark:border-gray-600 bg-custom-blue dark:bg-custom-purple shadow-lg">
          {matches.map((m) => (
            <li key={m.num}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  if (blurTimer.current) clearTimeout(blurTimer.current);
                  goTo(m.num);
                }}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-purple-200 dark:hover:bg-blue-900 transition-colors"
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
