import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { IMAGES_HOST } from "constants/api";
import { getDetail, getCredits } from "api/movies";

import { styles } from "./styles";

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
    const fetchCreadits = async () => {
      try {
        const response = await getCredits(movie.id);
        if (response?.data) setCredits(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCreadits();
  }, []);

  return (
    <View style={styles.wrapper}>
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
                  <Text style={styles.genreItem}>
                    {item.name}
                    {index === detailMovie.genres.length - 1 ? "" : ", "}
                  </Text>
                ))
              : null}
          </View>
        </View>
      </View>
      {movie?.overview ? <Text style={styles.label}>Обзор</Text> : null}
      <Text style={styles.description}>{movie?.overview || ""}</Text>
      {credits?.cast?.length ? (
        <Text style={styles.label}>Актерский состав</Text>
      ) : null}
    </View>
  );
};

export default Detail;
