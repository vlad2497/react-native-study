import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const List = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Версия приложения 1.0.0</Text>
    </View>
  );
};

export default List;
