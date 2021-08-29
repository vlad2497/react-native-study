import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { IMAGES_HOST } from "constants/api";
import { styles } from "./styles";

const ActorCard = ({ actor, onPress }) => {
  return (
    <TouchableOpacity
      onLongPress={() => {}}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={{ paddingBottom: 40 }}>
        <Image
          source={{ uri: `${IMAGES_HOST}/t/p/w200/${actor.profile_path}` }}
          style={styles.image}
        />
        <Text
          style={styles.originalName}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {actor.original_name}
        </Text>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {actor.character}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActorCard;
