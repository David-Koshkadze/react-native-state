import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import FoodPreferences from "./screens/FoodPreferences";

import type { CompositeNavigationProp } from '@react-navigation/native';
// import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";


type StackParamList = {
  Home: undefined;
  FoodPreferences: undefined;
};

// Type Checking Screens

export type StackProps = NativeStackScreenProps<StackParamList, "FoodPreferences">


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FoodPreferences" component={FoodPreferences} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
