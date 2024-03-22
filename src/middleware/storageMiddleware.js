import { saveFavorites } from "../util/storage";

const storageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (action.type === "favorites/addFavorite" || action.type === "favorites/removeFavorite") {
      saveFavorites(getState().favorites.favorites);
    }
    return result;
  };

export default storageMiddleware;
