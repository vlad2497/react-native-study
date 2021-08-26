import React from "react";
import { Button } from "react-native-paper";
import { styles } from "./styles";

export default ({ onPress, children }) => {
  return (
    <Button
      mode="contained"
      color="#01b4e4"
      onPress={onPress}
      labelStyle={styles.label}
    >
      {children}
    </Button>
  );
};
