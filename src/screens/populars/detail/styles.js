import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: "#0d1137",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBlock: {
    width: "50%",
  },
  rightBlock: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    color: "white",
  },
  text: {
    fontFamily: "roboto-regular",
    color: "white",
    paddingTop: 10,
  },
  description: {
    fontFamily: "roboto-regular",
    color: "white",
    paddingTop: 15,
    textAlign: "justify",
  },
  image: {
    resizeMode: "cover",
    width: 150,
    height: 200,
  },
});
