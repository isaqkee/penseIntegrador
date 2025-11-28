// Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./WelcomeScreen"; // Importando WelcomeScreen
import PaginaIntroducao from "./paginaIntroducao"; // Importando PaginaIntroducao

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PaginaIntroducao" component={PaginaIntroducao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
