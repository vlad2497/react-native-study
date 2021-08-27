import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
  },
  leftBlock: {
    width: "50%",
  },
  rightBlock: {
    width: "48%",
    paddingLeft: "2%",
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    color: "#0d1137",
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#0d1137",
    marginBottom: 10,
    marginTop: 5,
  },
  description: {
    fontFamily: "roboto-regular",
    color: "#0d1137",
    textAlign: "justify",
  },
  label: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    marginBottom: 5,
    marginTop: 15,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 250,
  },
  genreItem: {
    fontFamily: "roboto-regular",
    color: "#0d1137",
  },
  tagLine: {
    fontFamily: "roboto-bold",
    color: "#0d1137",
    marginBottom: 10,
  },
});
