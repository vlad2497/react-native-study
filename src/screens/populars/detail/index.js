import React from "react";
import { View, Text, Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { IMAGES_HOST } from "constants/api";
import { styles } from "./styles";

const Detail = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          <Text style={styles.title}>{movie?.title || "Фильм"}</Text>
          <Text style={styles.text}>Рейтинг: {movie.vote_average}</Text>
        </View>
        <View style={styles.rightBlock}>
          <SharedElement id={`item.${movie.title}.photo`}>
            <Image
              source={{ uri: `${IMAGES_HOST}/t/p/w200/${movie.poster_path}` }}
              style={styles.image}
            />
          </SharedElement>
        </View>
      </View>
      <Text style={styles.description}>{movie?.overview || ""}</Text>
    </View>
  );
};

export default Detail;
