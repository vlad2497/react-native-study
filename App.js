import React from "react";
import { StyleSheet, View } from "react-native";

import Navbar from "./components/base/navbar";
import AddTodo from "./pages/add-todo";

export default () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <AddTodo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
