import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import PopularsList from "screens/populars/list";
import MovieDetail from "components/base/movies/detail";

import { tabScreenOptions } from "../styles";

const PopularsStack = createSharedElementStackNavigator();

export const PopularsStackScreen = () => {
  return (
    <PopularsStack.Navigator
      initialRouteName="PopularList"
      screenOptions={tabScreenOptions}
    >
      <PopularsStack.Screen
        name="PopularList"
        component={PopularsList}
        options={{ title: "Популярное" }}
      />
      <PopularsStack.Screen
        name="PopularDetail"
        component={MovieDetail}
        options={({ route }) => ({
          title: route.params.movie.title,
          headerBackTitleVisible: false,
        })}
        sharedElements={(route, otherRoute, showing) => {
          if (otherRoute.name === "PopularList" && showing) {
            const { movie } = route.params;
            return [`item.${movie.title}.photo`];
          }
        }}
      />
    </PopularsStack.Navigator>
  );
};
