import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import EpisodeList from "../components/EpisodeList";
import { Colors } from "../constants.js/colors";
import { fetchEpisode, fetchEpisodeList } from "../api/episode";
import { useInfiniteQuery } from "@tanstack/react-query";
import { loadFavorites } from "../util/storage";
import { addFavorite } from "../features/favorites";
import SearchBox from "../components/SearchBox";

const Episodes = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ["episodes"],
    queryFn: fetchEpisodeList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const loadAndSetFavorites = async () => {
      const favorites = await loadFavorites();
      favorites.forEach((favorite) => {
        dispatch(addFavorite(favorite));
      });
    };

    loadAndSetFavorites();
  }, [dispatch]);

  async function searchHandler() {
    try {
      const result = await fetchEpisode(searchTerm);
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

  const episodes = data?.pages?.flat();
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <SearchBox
          placeholder={"episode name..."}
          onPressSearch={searchHandler}
          onSendSearchInfo={(name) => {
            setSearchTerm(name);
            setSearchResult([]);
          }}
        />
      </View>
      {searchResult.length == 0 || searchTerm.length == 0 ? (
        <EpisodeList episodes={episodes} onEndReached={fetchNextPage} />
      ) : (
        <EpisodeList episodes={searchResult} />
      )}
    </View>
  );
};

export default Episodes;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.blue50 },
});
