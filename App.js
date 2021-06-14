import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PopularsList from "screens/populars/list";
import PopularsDetail from "screens/populars/detail";

const loadFonts = async () => {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

const Stack = createStackNavigator();

export default () => {
  const [loading, setLoading] = useState(true);

  if (loading)
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoading(false)}
        onError={(err) => console.log(err)}
      />
    );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e52165",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "roboto-bold",
            color: "#fff",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={PopularsList}
          options={{ title: "Популярное" }}
        />
        <Stack.Screen
          name="PopularDetail"
          component={PopularsDetail}
          options={({ route }) => ({ title: route.params.movie.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
