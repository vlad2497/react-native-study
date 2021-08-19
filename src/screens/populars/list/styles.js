import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginBottom: 20,
    marginTop: 20,
    paddingRight: 15,
  },
  input: {
    width: "80%",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#0d1137",
    color: "white",
    fontFamily: "roboto-medium",
  },
  button: {
    width: "20%",
    borderRadius: 5,
    fontFamily: "roboto-medium",
  },
  carouselWrapper: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 26,
    marginBottom: 6,
  },
  banner: {
    height: 220,
  },
  bannerTitle: {
    fontFamily: "roboto-bold",
    fontSize: 26,
    color: "white",
    padding: 15,
    paddingTop: 50,
  },
  bannerText: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    color: "white",
    padding: 15,
    paddingTop: 0,
  },
});
