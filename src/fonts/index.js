import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "roboto-bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });
};
