import React, { useState, useEffect } from "react";
import { View, TextInput, ScrollView, Text, Dimensions } from "react-native";
import { Button, ActivityIndicator } from "react-native-paper";
import { Shadow } from "react-native-shadow-2";

import Carousel from "components/ui/carousel";
import Movie from "components/base/movies/card";
import Banner from "components/base/banner";
import { getPopularList, getTopList } from "api/movies";

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
      <Banner />
      <View style={styles.content}>
        <View style={styles.search}>
          <Shadow viewStyle={{ width: "100%", height: 30 }}>
            <TextInput
              style={[styles.input]}
              value={search}
              onChangeText={(text) => setSearch(text)}
              placeholder="Введите название фильма"
              placeholderTextColor={"white"}
            />
          </Shadow>
          <Button flat style={styles.button} color="#5c3c92" onPress={() => {}}>
            Найти
          </Button>
        </View>
        <Text style={styles.title}>Популярное</Text>
        <View style={styles.carouselWrapper}>
          <Carousel
            width={screen.width - 60}
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
          width={screen.width - 60}
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
