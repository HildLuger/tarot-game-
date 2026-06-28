import { createSlice } from '@reduxjs/toolkit';

interface CardInfo {
  filename: string;
  hasRedBorder: boolean;
}

interface ArcanaState {
  flipped: boolean;
  revealedCards: CardInfo[];
  // Number of cards whose reveal animation has finished and may be shown in the
  // revealed-cards list. Lags behind `revealedCards` during the animation.
  displayedCount: number;
  currentCard: string;
  allCardsRevealed: boolean;
}

const initialState: ArcanaState = {
  flipped: false,
  revealedCards: [],
  displayedCount: 0,
  currentCard: 'Arcana0.jpg',
  allCardsRevealed: false,
};

export const arcanaSlice = createSlice({
  name: 'arcana',
  initialState,
  reducers: {
    flipCard: (state) => {
      if (state.allCardsRevealed) {
        return;
      }

      // Each click reveals the next card.
      let nextCard: string;
      do {
        nextCard = `Arcana${Math.floor(Math.random() * 78) + 1}.jpg`;
      } while (state.revealedCards.some(cardInfo => cardInfo.filename === nextCard));

      // 20% chance to have a red border
      const hasRedBorder = Math.random() < 0.2;

      state.flipped = true;
      state.revealedCards.push({ filename: nextCard, hasRedBorder });
      state.currentCard = nextCard;

      if (state.revealedCards.length === 78) {
        state.allCardsRevealed = true;
      }
    },
    // Called when a card's reveal animation finishes; releases it to the list.
    revealComplete: (state) => {
      state.displayedCount = state.revealedCards.length;
    },
    resetGame: (state) => {
      state.flipped = false;
      state.revealedCards = [];
      state.displayedCount = 0;
      state.currentCard = 'Arcana0.jpg';
      state.allCardsRevealed = false;
    },
  },
});

export const { flipCard, revealComplete, resetGame } = arcanaSlice.actions;
export default arcanaSlice.reducer;
