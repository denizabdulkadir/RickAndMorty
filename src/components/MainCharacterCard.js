import React from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "../constants.js/colors";
import { addFavorite, removeFavorite } from "../features/favorites";

const MainCharacterCard = ({ character }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  const isFavorite = favorites.findIndex((favorite) => favorite.id === character?.id) >= 0;
  // console.log(favorites.length);

  function toggleFavoriteHandler() {
    if (!isFavorite) {
      dispatch(addFavorite(character));
    } else {
      Alert.alert(
        "",
        `${character?.name} isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`,
        [
          {
            text: "Hayır",
            style: "cancel",
          },
          {
            text: "Evet",
            style: "destructive",
            onPress: () => dispatch(removeFavorite({ id: character?.id })),
          },
        ]
      );
    }
  }

  function Icon() {
    if (isFavorite) {
      return <Octicons name="heart-fill" size={34} color={Colors.pink} />;
    }
    return <Octicons name="heart" size={34} color={Colors.pink} />;
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.6 }]}
      onPress={() => {
        navigation.navigate("CharacterDetail", { id: character?.id, title: character?.name });
      }}
    >
      <Image source={{ uri: character?.image }} style={styles.image} />
      <Text style={styles.characterName}>{character?.name}</Text>
      <View style={styles.cardBottom}>
        <View style={styles.bottomInnerContainer}>
          <Octicons name="dot-fill" size={24} color={Colors.blue300} />
          <Text style={styles.text}>{character?.status}</Text>
        </View>
        <View style={styles.bottomInnerContainer}>
          <Octicons name="dot-fill" size={24} color={Colors.blue300} />
          <Text style={styles.text}>{character?.species}</Text>
        </View>
        <View style={styles.bottomInnerContainer}>
          <Octicons name="dot-fill" size={24} color={Colors.blue300} />
          <Text style={styles.text}>{character?.gender}</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [styles.heart, pressed && { opacity: 0.6 }]}
        onPress={toggleFavoriteHandler}
      >
        <Icon />
      </Pressable>
    </Pressable>
  );
};

export default MainCharacterCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    borderRadius: 16,
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
    paddingTop: 10,
  },
  image: { width: 250, height: 250, borderRadius: 16 },
  characterName: { color: Colors.blue300, fontSize: 20, fontWeight: "500", textAlign: "center" },
  cardBottom: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: Colors.pink,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "space-around",
    marginTop: 10,
  },
  bottomInnerContainer: { flexDirection: "row", alignItems: "center", gap: 5 },
  text: {
    color: Colors.blue300,
    fontSize: 16,
    fontWeight: "500",
  },
  heart: { position: "absolute", right: 5, top: 5 },
});
