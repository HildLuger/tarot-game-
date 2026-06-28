import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { arcanaCards } from './arcanaData';
import styles from './arcana.module.css';

const textCardClasses =
  'bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white p-5';

const backButtonClasses =
  'bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors';

const groupFor = (num: number): string => {
  if (num <= 22) return 'Major Arcana';
  if (num <= 36) return 'Minor Arcana · The Suit of Wands';
  if (num <= 50) return 'Minor Arcana · The Suit of Cups';
  if (num <= 64) return 'Minor Arcana · The Suit of Swords';
  return 'Minor Arcana · The Suit of Pentacles';
};

const BackButton = () => (
  <div>
    <Link href="/" passHref>
      <button className={backButtonClasses}>Back</button>
    </Link>
  </div>
);

const Arcana = () => {
  const preloadImages = [];
  for (let i = 0; i <= 78; i++) {
    preloadImages.push(
      <link key={`arcana-preload-${i}`} rel="preload" href={`/Arcana${i}.jpg`} as="image" />,
    );
  }

  return (
    <>
      <Head>{preloadImages}</Head>

      <div className={styles.snapContainer}>
        {/* Section 1: Intro */}
        <section className={styles.section}>
          <div className={`${styles.lead} ${textCardClasses}`}>
            <p>
              <b>Would you dare to play this game? What answers can you find?</b>
              <br />
              <br />
              The revealed tarot cards on the Home page will be arranged in order. You can click on
              each of them and you will be taken to a specific part of the Arcana page, containing
              information about each of the cards revealed.
              <br />
              <br />
              <span className="text-red-600">Reversed cards are displayed with a red border.</span>
              <br />
              <br />
              Typically five or ten cards are drawn depending on the tradition, but feel free to draw
              as many as your intuition indicates.
              <br />
              <br />
              Find a peaceful place. Ask a question in your head. See what the cards have to tell you.
            </p>
          </div>
          <span className={styles.scrollHint}>Scroll to continue ↓</span>
        </section>

        {/* Section 2: Major & Minor Arcana explanation */}
        <section className={styles.section}>
          <h1 className={`${styles.title} ${textCardClasses}`}>The Arcana</h1>
          <div className={`${styles.lead} ${textCardClasses}`}>
            <p>
              <b>The Major Arcana</b> — 22 cards, from The Magician to The World. They represent
              life&apos;s great themes: archetypes, turning points, and spiritual lessons. When they
              appear, they speak to the deeper currents shaping a situation.
              <br />
              <br />
              <b>The Minor Arcana</b> — 56 cards split across four suits, each reflecting the texture
              of everyday life:
              <br />
              <br />
              <b>Wands</b> — energy, drive, and creativity.
              <br />
              <b>Cups</b> — emotions, relationships, and intuition.
              <br />
              <b>Swords</b> — thought, conflict, and truth.
              <br />
              <b>Pentacles</b> — work, money, and the material world.
              <br />
              <br />
              <span className="text-red-600">
                A card drawn reversed shifts toward its shadow or blocked meaning.
              </span>
            </p>
          </div>
          <span className={styles.scrollHint}>Scroll to continue ↓</span>
        </section>

        {/* One snap section per card: card + Back (left on desktop) and the
            explanation (right on desktop, below on mobile). */}
        {arcanaCards.map((card) => (
          <section id={`section${card.num}`} key={card.num} className={styles.section}>
            <div className={styles.cardLayout}>
              <div className={styles.cardCol}>
                <span className={styles.group}>{groupFor(card.num)}</span>
                <Image
                  src={card.img}
                  alt={`Arcana ${card.num}`}
                  width={220}
                  height={440}
                  className={styles.cardImg}
                  priority={card.num <= 2}
                />
                <BackButton />
              </div>
              <div
                className={`${styles.textCard} ${textCardClasses}`}
                dangerouslySetInnerHTML={{ __html: card.html }}
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Arcana;
