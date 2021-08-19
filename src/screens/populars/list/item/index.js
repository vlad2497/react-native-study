import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

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
        <Image
          source={{ uri: `${IMAGES_HOST}/t/p/w200/${movie.poster_path}` }}
          style={styles.image}
        />
        <View style={styles.circularProgress}>
          <CircularProgress
            value={movie.vote_average}
            radius={30}
            textColor={"#ecf0f1"}
            activeStrokeColor={"#1ed5a9"}
            inActiveStrokeColor={"#ecf0f1"}
            maxValue={10}
          />
        </View>
        <Text style={styles.rateLabel}>из 10</Text>
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.text}>Рейтинг: {movie.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;
