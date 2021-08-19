import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import Carousel from "components/ui/carousel";
import { getPopularList, getTopList } from "api/movies";
import { IMAGES_HOST } from "constants/api";
import Movie from "./item";
import { styles } from "./styles";

const List = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularList = await getPopularList();
        setPopularMovies(popularList?.data?.results);
        const topList = await getTopList();
        setTopMovies(topList?.data?.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovies();
  }, []);

  if (!popularMovies?.length || !topMovies?.length)
    return (
      <View>
        <Text>Загрузка</Text>
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: `${IMAGES_HOST}/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/jTiQAusGG4dVLSb1WHme9I9R4NN.jpg`,
        }}
        style={styles.banner}
      >
        <Text style={styles.bannerTitle}>Добро пожаловать.</Text>
        <Text style={styles.bannerText}>
          Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
        </Text>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.search}>
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
        <Text style={styles.title}>Популярное</Text>
        <View style={styles.carouselWrapper}>
          <Carousel
            items={popularMovies}
            renderItem={({ item }) => (
              <Movie
                movie={item}
                onPress={() =>
                  navigation.navigate("PopularDetail", { movie: item })
                }
              />
            )}
          ></Carousel>
        </View>
        <Text style={styles.title}>Лучшие оценки</Text>
        <Carousel
          items={topMovies}
          renderItem={({ item }) => (
            <Movie
              movie={item}
              onPress={() =>
                navigation.navigate("PopularDetail", { movie: item })
              }
            />
          )}
        ></Carousel>
      </View>
    </ScrollView>
  );
};

export default List;
