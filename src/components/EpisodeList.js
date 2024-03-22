import { StyleSheet, FlatList } from "react-native";
import React from "react";

import EpisodeCard from "./EpisodeCard";

const EpisodeList = ({ episodes, onEndReached }) => {
  //   console.log("EpisodeList:", JSON.stringify(episodes, undefined, 2));
  return (
    <FlatList
      data={episodes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <EpisodeCard episode={item} />}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
    />
  );
};

export default EpisodeList;

const styles = StyleSheet.create({
  container: { gap: 10, margin: 10 },
});
