import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveFavorites = async (favorites) => {
  try {
    await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error(error);
  }
};

export const loadFavorites = async () => {
  try {
    const value = await AsyncStorage.getItem("@favorites");
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};
