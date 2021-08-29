import { StyleSheet } from "react-native";

const borderRadius = 20;

export const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 250,
    borderRadius: 15,
    backgroundColor: "silver",
  },
  originalName: {
    fontFamily: "roboto-bold",
    fontSize: 16,
    color: "#0d1137",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  name: {
    fontFamily: "roboto-bold",
    fontSize: 16,
    color: "#0d1137",
    textAlign: "center",
  },
});
