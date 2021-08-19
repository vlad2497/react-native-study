import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { PopularsStackScreen } from "navigation/stacks/populars";
import { FavoritesStackScreen } from "navigation/stacks/favorites";
import { AboutStackScreen } from "navigation/stacks/about";

import { getTabImage } from "helpers/getTabImage";

const Tab = createBottomTabNavigator();

export const AppWithNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "white",
            borderTopColor: "black",
            paddingTop: 5,
            paddingBottom: 5,
            height: 80,
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Image source={getTabImage(route.name, focused)} />
          ),
        })}
      >
        <Tab.Screen name="Populars" component={PopularsStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
