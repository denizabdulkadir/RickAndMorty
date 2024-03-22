import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

const HeaderButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="chevron-back" size={24} color={"white"} />
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
