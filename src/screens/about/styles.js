import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 0,
    flex: 1,
  },
  title: {
    fontFamily: "roboto-bold",
    color: "#0d1137",
    marginBottom: 15,
  },
  photoContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  photoContainerLeft: {
    width: "50%",
  },
  photoContainerRight: {
    width: "50%",
    alignItems: "flex-end",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "silver",
  },
});
