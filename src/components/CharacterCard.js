import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../constants.js/colors";

const CharacterCard = ({ character }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.6 }]}
      onPress={() => {
        navigation.navigate("CharacterDetail", { id: character?.id, title: character?.name });
      }}
    >
      <Image source={{ uri: character?.image }} style={styles.image} />
      <Text style={styles.characterName}>{character?.name}</Text>
    </Pressable>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: "center",
  },
  image: { width: 250, height: 250, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  characterName: { color: Colors.blue300, fontSize: 20, fontWeight: "500", textAlign: "center" },
});
