import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllCharacters, fetchCharacter } from "../api/character";
import MainCharacterList from "../components/MainCharacterList";
import { Colors } from "../constants.js/colors";
import SearchBox from "../components/SearchBox";
import RadioButtonGroup from "../components/RadioButtonGroup";

const Characters = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selection, setSelection] = useState({});

  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: fetchAllCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  async function searchHandler() {
    try {
      const result = await fetchCharacter(selection?.value ?? "name", searchTerm);
      setSearchResult(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  const characters = data?.pages?.flat();
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <SearchBox
          placeholder={"Search..."}
          onPressSearch={searchHandler}
          onSendSearchInfo={(name) => {
            setSearchTerm(name);
            setSearchResult([]);
          }}
        />
        <RadioButtonGroup
          onSelection={(s) => {
            setSelection(s);
          }}
        />
      </View>
      {searchResult.length == 0 || searchTerm.length == 0 ? (
        <MainCharacterList characters={characters} onEndReached={fetchNextPage} />
      ) : (
        <MainCharacterList characters={searchResult} />
      )}
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.blue50 },
});
