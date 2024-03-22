import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants.js/colors";

const Button = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.container]}
      onPress={onPress}
    >
      <Text style={styles.title}>Search</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 16,
    paddingHorizontal: 6,
    backgroundColor: Colors.blue200,
    height: 34,
  },
  title: { fontSize: 16, color: "white" },
});
