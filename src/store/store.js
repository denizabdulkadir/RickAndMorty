import { configureStore } from "@reduxjs/toolkit";

import storageMiddleware from "../middleware/storageMiddleware";
import favoritesReducer from "../features/favorites";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
});
