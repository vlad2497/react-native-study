import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { IMAGES_HOST } from "constants/api";
import { styles } from "./styles";

const Movie = ({ movie, onPress }) => {
  return (
    <TouchableOpacity
      onLongPress={() => {}}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.text}>Рейтинг: {movie.vote_average}</Text>
        </View>
        <View style={styles.rightBlock}>
          <Image
            source={{ uri: `${IMAGES_HOST}/${movie.poster_path}` }}
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;
