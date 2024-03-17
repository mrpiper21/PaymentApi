import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../../screens/home/Home";
import React from "react";
import Convertor from "../../../screens/home/convertor";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Convert" component={Convertor} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
