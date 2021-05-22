import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",

    height: 80,

    backgroundColor: "#e52165",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
  },
});
