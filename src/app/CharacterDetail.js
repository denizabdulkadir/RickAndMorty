import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

import { useCharacter } from "../api/character";
import CharacterCard from "../components/CharacterCard";
import { Colors } from "../constants.js/colors";

const CharacterDetail = ({ route }) => {
  const id = route?.params?.id;

  const { data: character, error, isLoading } = useCharacter(id);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }
  console.log();
  return (
    <View style={styles.container}>
      <CharacterCard character={character} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Status: {character?.status}</Text>
        <Text style={styles.text}>Species: {character?.species}</Text>
        <Text style={styles.text}>Gender: {character?.gender}</Text>
        <Text style={styles.text}>Origin: {character?.origin?.name}</Text>
        <Text style={styles.text}>Location: {character?.location?.name}</Text>
      </View>
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 20, backgroundColor: Colors.blue50 },
  textContainer: {
    justifyContent: "space-between",
    marginTop: 10,
    gap: 5,
    alignItems: "center",
  },
  text: {
    color: Colors.blue300,
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "italic",
  },
});
