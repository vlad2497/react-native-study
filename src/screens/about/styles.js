import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 0,
    flex: 1,
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 16,
    color: "#0d1137",
    marginBottom: 15,
  },
  photoContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  photoContainerLeft: {
    width: "50%",
    justifyContent: "space-around",
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
  mapContainer: {
    marginBottom: 40,
  },
  map: {
    width: "100%",
    height: 200,
  },
  pushContainer: {
    marginBottom: 40,
  },
  infoContainer: {
    marginBottom: 40,
  },
});
