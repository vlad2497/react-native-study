import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  list: {
    paddingTop: 20,
    flex: 1,
  },
});
