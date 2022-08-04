import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuApp from "../screens/MenuApp";



const Stack = createNativeStackNavigator();


const MenuNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Notification" >
            <Stack.Screen name="Menus" component={MenuApp}  />

        </Stack.Navigator>
    );
}

export default MenuNavigator;