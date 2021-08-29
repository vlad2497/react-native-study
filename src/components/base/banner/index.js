import React from "react";
import { Text, ImageBackground } from "react-native";
import { IMAGES_HOST } from "constants/api";
import { styles } from "./styles";

const Banner = () => {
  return (
    <ImageBackground
      source={{
        uri: `${IMAGES_HOST}/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg`,
      }}
      style={styles.banner}
    >
      <Text style={styles.bannerTitle}>Добро пожаловать</Text>
    </ImageBackground>
  );
};

export default Banner;
