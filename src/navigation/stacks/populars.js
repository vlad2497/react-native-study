import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import PopularsList from "screens/populars/list";
import PopularsDetail from "screens/populars/detail";

const PopularsStack = createStackNavigator();

export const PopularsStackScreen = () => {
  return (
    <PopularsStack.Navigator
      initialRouteName="PopularList"
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
      <PopularsStack.Screen
        name="PopularList"
        component={PopularsList}
        options={{ title: "Популярное" }}
      />
      <PopularsStack.Screen
        name="PopularDetail"
        component={PopularsDetail}
        options={({ route }) => ({ title: route.params.movie.title })}
      />
    </PopularsStack.Navigator>
  );
};
