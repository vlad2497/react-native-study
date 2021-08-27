import React from "react";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import FavoritesList from "screens/favorites/list";
import MovieDetail from "components/base/movies/detail";

import { tabScreenOptions } from "../styles";

const FavoritesStack = createSharedElementStackNavigator();

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
        component={MovieDetail}
        options={({ route }) => ({
          title: route.params.movie.title,
          headerBackTitleVisible: false,
        })}
        sharedElements={(route, otherRoute, showing) => {
          if (otherRoute.name === "FavoritesList" && showing) {
            const { movie } = route.params;
            return [`item.${movie.title}.photo`];
          }
        }}
      />
    </FavoritesStack.Navigator>
  );
};
