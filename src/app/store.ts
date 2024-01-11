// src/store.ts

import { configureStore } from '@reduxjs/toolkit';
import arcanaReducer from './slices/arcanaSlice'; // Ensure this path matches the location of your arcanaSlice

export const store = configureStore({
  reducer: {
    arcana: arcanaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
