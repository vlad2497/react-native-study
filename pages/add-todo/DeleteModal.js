import React from "react";
import { Modal, View, StyleSheet, Button, Text, Image } from "react-native";

const DeleteModal = ({ visible, confirmHandler, cancelHandler }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.wrapper}>
        <Image
          source={require("../../assets/task.png")}
          width={70}
          height={70}
        />
        <Text style={styles.title}>
          Вы действительно хотите удалить задачу ?
        </Text>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            title="Отменить"
            color="#829079"
            onPress={cancelHandler}
          />
          <Button
            style={styles.button}
            title="Удалить"
            color="#d71b3b"
            onPress={confirmHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#b85042",
    marginBottom: 25,
    marginTop: 25,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  button: {
    width: "30%",
    borderRadius: 5,
  },
});

export default DeleteModal;
