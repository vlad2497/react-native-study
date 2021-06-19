import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import FavoritesList from "screens/favorites/list";
import FavoritesDetail from "screens/favorites/detail";

const FavoritesStack = createStackNavigator();

export const FavoritesStackScreen = () => {
  return (
    <FavoritesStack.Navigator
      initialRouteName="FavoritesList"
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
      <FavoritesStack.Screen
        name="FavoritesList"
        component={FavoritesList}
        options={{ title: "Избранное" }}
      />
      <FavoritesStack.Screen
        name="FavoritesDetail"
        component={FavoritesDetail}
        options={({ route }) => ({ title: route.params.movie.title })}
      />
    </FavoritesStack.Navigator>
  );
};
