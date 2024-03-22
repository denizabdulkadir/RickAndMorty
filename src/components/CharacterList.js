import { ActivityIndicator, StyleSheet, Text, FlatList } from "react-native";
import React from "react";

import CharacterCard from "./CharacterCard";
import { useCharacterList } from "../api/character";

const CharacterList = ({ characters }) => {
  const { data, error, isLoading } = useCharacterList(characters);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <CharacterCard character={item} />}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  container: { gap: 10, margin: 10 },
});
