import { createSlice } from "@reduxjs/toolkit";
import { scheduleDailyNotification } from "../lib/notification";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.length < 10) {
        state.favorites.push(action.payload);
      } else {
        scheduleDailyNotification();
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
