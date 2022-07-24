import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import FirstScreen from "../pages/FirstScreen";
import FirstMenu from "../pages/FirstMenu";
import MenuRegister from "../pages/MenuRegister";

const Stack = createNativeStackNavigator()

const PlayPadelNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={FirstScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Iniciar Sesion" component={FirstMenu} />
        <Stack.Screen name="Registro" component={MenuRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PlayPadelNavigator;