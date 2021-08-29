import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, Dimensions } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { IMAGES_HOST } from "constants/api";
import { getDetail, getCredits } from "api/movies";
import Carousel from "components/ui/carousel";
import ActorCard from "components/base/actors/card";

import { styles } from "./styles";

const screen = Dimensions.get("screen");

const Detail = ({ route }) => {
  const { movie } = route.params;
  const [detailMovie, setDetailMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getDetail(movie.id);
        if (response?.data) setDetailMovie(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDetail();
  }, []);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await getCredits(movie.id);
        if (response?.data) setCredits(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCredits();
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          <SharedElement id={`item.${movie.title}.photo`}>
            <Image
              source={{ uri: `${IMAGES_HOST}/t/p/w200/${movie.poster_path}` }}
              style={styles.image}
            />
          </SharedElement>
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.title}>{movie?.title || "Фильм"}</Text>
          <Text style={styles.text}>Рейтинг: {movie.vote_average}</Text>
          {detailMovie?.tagline ? (
            <Text style={styles.tagLine}>{detailMovie.tagline}</Text>
          ) : null}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {detailMovie?.genres?.length
              ? detailMovie.genres.map((item, index) => (
                  <Text style={styles.genreItem} key={item.name}>
                    {item.name}
                    {index === detailMovie.genres.length - 1 ? "" : ", "}
                  </Text>
                ))
              : null}
          </View>
        </View>
      </View>
      {movie?.overview ? (
        <>
          <Text style={styles.label}>Обзор</Text>
          <Text style={styles.description}>{movie?.overview || ""}</Text>
        </>
      ) : null}
      {credits?.cast?.length ? (
        <>
          <Text style={styles.label}>Актерский состав</Text>
          <Carousel
            width={screen.width - 250}
            items={credits.cast}
            renderItem={({ item }) => (
              <ActorCard actor={item} onPress={() => {}} />
            )}
          ></Carousel>
        </>
      ) : null}
    </ScrollView>
  );
};

export default Detail;
