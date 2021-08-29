import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getPopularList } from "api/movies";
import Movie from "components/base/movies/card";
import Banner from "components/base/banner";

import { styles } from "./styles";

const List = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getPopularList();
        setMovies(response?.data?.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovies();
  }, []);

  if (!movies?.length)
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating={true} color="#0d1137" size={50} />
      </View>
    );

  return (
    <FlatList
      ListHeaderComponent={
        <View style={{ marginBottom: 20 }}>
          <Banner />
        </View>
      }
      data={movies}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Movie
            movie={item}
            onPress={() =>
              navigation.navigate("FavoritesDetail", { movie: item })
            }
          />
        </View>
      )}
      keyExtractor={(movie) => movie.id.toString()}
    />
  );
};

export default List;
