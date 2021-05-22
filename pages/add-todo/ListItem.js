import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ListItem = ({ title, removeHandler }) => {
  return (
    <TouchableOpacity onLongPress={removeHandler} activeOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 10,
    marginBottom: 5,

    backgroundColor: "#7a2048",
    borderRadius: 5,
  },
  title: {
    color: "white",
  },
});
