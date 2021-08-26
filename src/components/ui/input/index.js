import React from "react";
import { TextInput } from "react-native-paper";
import { styles } from "./styles";

export default ({ label, value, onChangeText }) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChangeText(text)}
      style={styles.textInput}
      mode="outlined"
      outlineColor="#90cea1"
      theme={{ colors: { primary: "#01b4e4", placeholder: "#90cea1" } }}
    />
  );
};
