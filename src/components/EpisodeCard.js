import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../constants.js/colors";

const EpisodeCard = ({ episode }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.6 }]}
      onPress={() => {
        navigation.navigate("EpisodeDetail", { id: episode?.id, title: episode?.name });
      }}
    >
      <Text style={styles.name}>{episode.name}</Text>
      <View style={styles.cartBottom}>
        <AntDesign name="calendar" size={20} color={Colors.blue300} />
        <Text style={styles.date}>{episode.air_date}</Text>
      </View>
    </Pressable>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 120,
    backgroundColor: Colors.pink,
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
  },
  cartBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 5,
    backgroundColor: Colors.green,
    gap: 5,
  },
  name: { color: "white", fontSize: 20, fontWeight: "600" },
  date: { fontWeight: "500", color: Colors.blue300 },
});
