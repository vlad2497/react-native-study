import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import { getPopularList } from "api/movies";
import Movie from "./item";
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
      <View>
        <Text>Загрузка</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Movie
              movie={item}
              onPress={() =>
                navigation.navigate("FavoritesDetail", { movie: item })
              }
            />
          )}
          keyExtractor={(movie) => movie.id.toString()}
        />
      </View>
    </View>
  );
};

export default List;
