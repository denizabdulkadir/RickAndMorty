import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants.js/colors";
import Button from "./Button";

const SearchBox = ({ onPressSearch, onSendSearchInfo, placeholder }) => {
  const [sectionInfo, setSectionInfo] = useState("");

  function handleInputInfo(text) {
    setSectionInfo(text);
    onSendSearchInfo(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color={Colors.blue200} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={sectionInfo}
          onChangeText={handleInputInfo}
        />
      </View>
      {sectionInfo.length > 0 && <Button onPress={onPressSearch} />}
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    gap: 5,
  },
  inputContainer: {
    gap: 5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.blue200,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: { fontSize: 16, width: "70%", color: Colors.blue200 },
});
