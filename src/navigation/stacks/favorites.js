import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
//import { FluidNavigator } from "react-navigation-fluid-transitions";

import FavoritesList from "screens/favorites/list";
import FavoritesDetail from "screens/favorites/detail";

import { tabScreenOptions } from "../styles";

const FavoritesStack = createStackNavigator();

export const FavoritesStackScreen = () => {
  return (
    <FavoritesStack.Navigator
      initialRouteName="FavoritesList"
      screenOptions={tabScreenOptions}
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
