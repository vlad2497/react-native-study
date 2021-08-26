import { StyleSheet } from "react-native";

const borderRadius = 20;

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 200,
    borderRadius: borderRadius,
  },
  content: {
    position: "absolute",
    bottom: 0,

    backgroundColor: "black",
    opacity: 0.8,
    borderBottomStartRadius: borderRadius,
    borderBottomEndRadius: borderRadius,

    width: "100%",
    height: 70,

    padding: 10,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontFamily: "roboto-bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "white",
    fontFamily: "roboto-bold",
  },
  image: {
    height: 200,
    width: "65%",
    resizeMode: "cover",
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  voteContainer: {
    alignItems: "center",
    paddingTop: 28,
    width: "35%",
    height: "100%",

    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#0d1137",

    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  voteLabel: {
    fontSize: 16,
    color: "white",
    fontFamily: "roboto-bold",
  },
});
