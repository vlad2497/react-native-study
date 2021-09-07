import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("screen");

export const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 15,
    paddingRight: 0,
    paddingTop: 0,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 30,
    paddingRight: 15,
  },
  input: {
    width: screen.width - 115,
    height: "100%",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#0d1137",
    color: "white",
    fontFamily: "roboto-medium",
  },
  button: {
    width: 100,
    fontFamily: "roboto-medium",
  },
  carouselWrapper: {
    marginBottom: 30,
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 20,
    marginBottom: 12,
  },
});
