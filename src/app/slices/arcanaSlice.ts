import { createSlice } from '@reduxjs/toolkit';

interface CardInfo {
  filename: string;
  hasRedBorder: boolean;
}

interface ArcanaState {
  flipped: boolean;
  revealedCards: CardInfo[];
  currentCard: string;
  allCardsRevealed: boolean;
}

const initialState: ArcanaState = {
  flipped: false,
  revealedCards: [],
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

      state.flipped = !state.flipped;

      if (state.flipped) {
        // Explicitly declare nextCard as a string
        let nextCard: string;
        do {
          nextCard = `Arcana${Math.floor(Math.random() * 78) + 1}.jpg`;
        } while (state.revealedCards.some(cardInfo => cardInfo.filename === nextCard));

        // 10% chance to have a red border
        const hasRedBorder = Math.random() < 0.2;

        state.revealedCards.push({ filename: nextCard, hasRedBorder });
        state.currentCard = nextCard;

        if (state.revealedCards.length === 78) {
          state.allCardsRevealed = true;
        }
      } else {
        state.currentCard = 'Arcana0.jpg';
      }
    },
    resetGame: (state) => {
      state.flipped = false;
      state.revealedCards = [];
      state.currentCard = 'Arcana0.jpg';
      state.allCardsRevealed = false;
    },
  },
});

export const { flipCard, resetGame } = arcanaSlice.actions;
export default arcanaSlice.reducer;
