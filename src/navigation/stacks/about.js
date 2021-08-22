import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import { FluidNavigator } from "react-navigation-fluid-transitions";

import About from "screens/about";
import { tabScreenOptions } from "../styles";

const AboutStack = createStackNavigator();

export const AboutStackScreen = () => {
  return (
    <AboutStack.Navigator
      initialRouteName="About"
      screenOptions={tabScreenOptions}
    >
      <AboutStack.Screen
        name="About"
        component={About}
        options={{ title: "О приложении" }}
      />
    </AboutStack.Navigator>
  );
};
