import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";

import { Colors } from "../constants.js/colors";
import MainCharacterList from "../components/MainCharacterList";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);

  if (favorites.length == 0) {
    return <Text>No Favorite Characters Yet!</Text>;
  }

  return (
    <View style={styles.container}>
      {favorites && <MainCharacterList characters={favorites} />}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: Colors.blue50,
});
