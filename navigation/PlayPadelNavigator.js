import React from "react";
import {Image, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import FirstScreen from "../pages/FirstScreen";
import FirstMenu from "../pages/FirstMenu";

import MenuApp from "../screens/MenuApp";
import { COLORS } from "../constants/Colors";
import CategoryMenuScreen from "../screens/CategoryMenuScreen";
import MenusDetailScreen from "../screens/MenusDetailScreen";

const Stack = createNativeStackNavigator()

const PlayPadelNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? COLORS.primary : '#315167',
        },
        headerTintColor: Platform.OS === "android" ? '#fff' : '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }}}
       >
        <Stack.Screen name="Home" component={FirstScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Iniciar Sesion" component={FirstMenu}  />
        <Stack.Screen name="Products" component={MenuApp} />
       <Stack.Screen name="Detail" component={CategoryMenuScreen}  options= {({route}) => ({ title: route.params.name})}/>
       <Stack.Screen name="Register" component={MenusDetailScreen} />
     
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default PlayPadelNavigator;