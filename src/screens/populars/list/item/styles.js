import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 200,
    backgroundColor: "#7a2048",
    borderRadius: 10,
  },
  content: {
    position: "absolute",
    bottom: 0,

    backgroundColor: "black",
    opacity: 0.8,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,

    width: "100%",
    height: 100,

    padding: 25,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontFamily: "roboto-bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "roboto-bold",
  },
  rateLabel: {
    position: "absolute",
    top: 41,
    right: 40,

    fontSize: 16,
    color: "white",
    fontFamily: "roboto-bold",
  },
  image: {
    height: 200,
    width: "50%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
  },
  circularProgress: {
    position: "absolute",
    top: 20,
    right: 90,
  },
});
