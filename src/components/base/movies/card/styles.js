import { StyleSheet } from "react-native";

const borderRadius = 20;

export const styles = StyleSheet.create({
  container: {
    height: 250,
    borderRadius: borderRadius,
    flexDirection: "row",
    backgroundColor: "#0d1137",
  },
  leftBlock: {
    width: "50%",
  },
  image: {
    height: 250,
    resizeMode: "cover",
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  rightBlock: {
    width: "50%",
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    height: "50%",
    justifyContent: "flex-end",
    borderBottomStartRadius: borderRadius,
    borderBottomEndRadius: borderRadius,

    padding: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontFamily: "roboto-bold",
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
    fontFamily: "roboto-bold",
    textAlign: "center",
  },
  voteContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "flex-start",

    borderTopRightRadius: borderRadius,
  },
  voteLabel: {
    fontSize: 16,
    color: "white",
    fontFamily: "roboto-bold",
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 20,
  },
});
