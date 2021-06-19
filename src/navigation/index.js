import React from "react";
import { Image, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { PopularsStackScreen } from "navigation/stacks/populars.js";
import { FavoritesStackScreen } from "navigation/stacks/favorites.js";

import homeImage from "../../assets/home.png";
import favoritesImage from "../../assets/favorites.png";

const Tab = createBottomTabNavigator();

export const AppWithNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
          style: {
            backgroundColor: "white",
            borderTopColor: "black",
            paddingTop: 5,
            paddingBottom: 5,
            height: 50,
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: () => (
            <Image
              source={route.name === "Favorites" ? favoritesImage : homeImage}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        })}
      >
        <Tab.Screen name="Populars" component={PopularsStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
