import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useQueries, useQuery } from "@tanstack/react-query";

import {
  fetchAllCharacterDetails,
  fetchCharacterDetails,
  fetchEpisodeDetails,
  useCharacterList,
} from "../api/episode";
import CharacterList from "../components/CharacterList";
import { Colors } from "../constants.js/colors";

const EpisodeDetail = ({ route, navigation }) => {
  const id = route.params.id;

  const [charactersData, setCharactersData] = useState([]);
  const {
    data: episode,
    isLoading,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["episode", id],
    queryFn: () => fetchEpisodeDetails(id),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name: {episode.name} </Text>
      <Text style={styles.date}>Air Date: {episode.air_date} </Text>
      <Text style={styles.charactersText}>Characters </Text>

      {isSuccess && episode && <CharacterList characters={episode?.characters} />}
    </View>
  );
};

export default EpisodeDetail;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  name: {
    color: Colors.blue200,
    fontSize: 20,
    fontWeight: "400",
    marginTop: 10,
  },
  date: { color: Colors.blue200, fontSize: 20, fontWeight: "400" },
  charactersText: {
    alignSelf: "center",
    color: Colors.blue200,
    fontSize: 28,
    fontWeight: "400",
    marginTop: 30,
  },
});
