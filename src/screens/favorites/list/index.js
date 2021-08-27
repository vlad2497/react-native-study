import React, { useState, useEffect } from "react";
import { View, FlatList, ImageBackground, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getPopularList } from "api/movies";
import Movie from "components/base/movies/card";
import { IMAGES_HOST } from "constants/api";

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
        <ImageBackground
          source={{
            uri: `${IMAGES_HOST}/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg`,
          }}
          style={styles.banner}
        >
          <Text style={styles.bannerTitle}>Добро пожаловать.</Text>
          <Text style={styles.bannerText}>
            Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
          </Text>
        </ImageBackground>
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
