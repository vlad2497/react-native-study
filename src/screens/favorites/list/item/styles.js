import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 10,
    marginBottom: 5,

    backgroundColor: "#7a2048",
    borderRadius: 5,
  },
  leftBlock: {
    width: "70%",
  },
  rightBlock: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    color: "white",
    fontFamily: "roboto-bold",
  },
  text: {
    color: "white",
    fontFamily: "roboto-regular",
  },
  image: {
    resizeMode: "cover",
    width: 70,
    height: 70,
  },
});
