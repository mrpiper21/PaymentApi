import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import HomeNavigation from "./home";
import React from "react";

const Tab = createBottomTabNavigator();

const ProtectedNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialIcons name="home-filled" size={30} color="black" />
            ),
          }}
          name="Home"
          component={HomeNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedNavigation;
