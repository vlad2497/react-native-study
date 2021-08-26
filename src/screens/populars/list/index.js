import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Button, ActivityIndicator } from "react-native-paper";

import Carousel from "components/ui/carousel";
import Movie from "components/base/movies/card";
import { getPopularList, getTopList } from "api/movies";
import { IMAGES_HOST } from "constants/api";

import { styles } from "./styles";

const screen = Dimensions.get("screen");

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
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating={true} color="#0d1137" size={50} />
      </View>
    );

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.content}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Введите название фильма"
            placeholderTextColor={"white"}
          />
          <Button flat style={styles.button} color="#5c3c92" onPress={() => {}}>
            Найти
          </Button>
        </View>
        <Text style={styles.title}>Популярное</Text>
        <View style={styles.carouselWrapper}>
          <Carousel
            width={screen.width - 80}
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
          width={screen.width - 80}
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
