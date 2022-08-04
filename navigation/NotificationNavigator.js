import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationScreen from "../screens/NotificationScreen";



const Stack = createNativeStackNavigator();


const NotificationNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Notification" >
            <Stack.Screen name="Noti" component={NotificationScreen} options={{title: 'Notificacion'}} />

        </Stack.Navigator>
    );
}

export default NotificationNavigator;