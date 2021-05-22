import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
} from "react-native";

import ListItem from "./ListItem";
import DeleteModal from "./DeleteModal";
import fakeData from "../../fakeData";

const AddTodo = () => {
  const [todos, setTodos] = useState(fakeData);
  const [textInput, setTextInput] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [todoIdForDelete, setTodoIdForDelete] = useState("");

  const addTodo = () => {
    if (textInput.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now().toString(), title: textInput },
      ]);
      setTextInput("");
    } else Alert.alert("Введите дело !");
  };

  const removeTodo = () => {
    setTodos((prev) => [...prev.filter((todo) => todo.id !== todoIdForDelete)]);
    setOpenDeleteModal(false);
  };

  const openDeleteModalHandler = (todoId) => {
    setOpenDeleteModal(true);
    setTodoIdForDelete(todoId);
  };

  return (
    <View style={styles.container}>
      <DeleteModal
        visible={openDeleteModal}
        confirmHandler={removeTodo}
        cancelHandler={() => setOpenDeleteModal(false)}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholder="Введите значение"
          placeholderTextColor={"white"}
        />
        <Button
          style={styles.button}
          title="Добавить"
          color="#5c3c92"
          onPress={addTodo}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              removeHandler={() => openDeleteModalHandler(item.id)}
            />
          )}
          keyExtractor={(todo) => todo.id}
        />
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "70%",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#0d1137",
    color: "white",
  },
  button: {
    width: "30%",
    borderRadius: 5,
  },
  list: {
    paddingTop: 20,
    flex: 1,
  },
});
