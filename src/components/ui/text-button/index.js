import React from "react";
import { Button } from "react-native-paper";
import { styles } from "./styles";

export default ({ onPress, children }) => {
  return (
    <Button
      mode="text"
      color="#0d253f"
      onPress={onPress}
      labelStyle={styles.label}
    >
      {children}
    </Button>
  );
};
