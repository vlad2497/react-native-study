import React from "react";
import { View, Text, Image } from "react-native";

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
          <Image
            source={{ uri: `${IMAGES_HOST}/${movie.poster_path}` }}
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.description}>{movie?.overview || ""}</Text>
    </View>
  );
};

export default Detail;
