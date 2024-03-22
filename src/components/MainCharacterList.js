import { StyleSheet, FlatList } from "react-native";
import React from "react";

import CharacterCard from "./CharacterCard";
import MainCharacterCard from "./MainCharacterCard";

const MainCharacterList = ({ characters, onEndReached }) => {
  return (
    <FlatList
      data={characters}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <MainCharacterCard character={item} />}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
    />
  );
};

export default MainCharacterList;

const styles = StyleSheet.create({
  container: { gap: 10, margin: 10 },
});
