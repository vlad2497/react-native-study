import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

import { getList } from "api/movies";
import Movie from "./item";
import { styles } from "./styles";

const AddTodo = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getList();
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
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Введите название фильма"
          placeholderTextColor={"white"}
        />
        <Button
          style={styles.button}
          title="Найти"
          color="#5c3c92"
          onPress={() => {}}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Movie
              movie={item}
              onPress={() =>
                navigation.navigate("PopularDetail", { movie: item })
              }
            />
          )}
          keyExtractor={(movie) => movie.id.toString()}
        />
      </View>
    </View>
  );
};

export default AddTodo;
