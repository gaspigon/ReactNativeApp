import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";


const Stack = createNativeStackNavigator();


const ProfileNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" >
            <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'perfil'}} />

        </Stack.Navigator>
    );
}

export default ProfileNavigator;