import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet , View,Text} from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';


import ProfileNavigator from "./ProfileNavigator";

import NotificationNavigator from "./NotificationNavigator";
import MenuNavigator from "./MenuNavigator";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
           headerShown: false,
           tabBarShowLabel: false,
           tabBarStyle: styles.tabBar

        }}>
           
            <BottomTabs.Screen name="Notification" component={NotificationNavigator}
            options={{
                tabBarIcon: ({ focused}) => (
                    <View style={styles.item}> 
                        <Ionicons name='notifications' size={24} color={focused ? 'blue' : 'black'}/>
                        <Text>Notificacion</Text>
                    </View>
                )
            }}/>
            <BottomTabs.Screen name="Men" component={MenuNavigator} 
                        options={{
                            tabBarIcon: ({ focused}) => (
                                <View style={styles.item}> 
                                    <Ionicons name='md-home' size={24} color={focused ? 'blue' : 'black'}/>
                                    <Text>Home</Text>
                                </View>
                            )
                        }}/>
            <BottomTabs.Screen name="Pro" component={ProfileNavigator} 
                                    options={{
                                        tabBarIcon: ({ focused}) => (
                                            <View style={styles.item}> 
                                               <FontAwesome name="user" size={24} color={focused ? 'blue' : 'black'} />
                                               <Text>Perfil</Text>
                                            </View>
                                        )
                                    }}/>
        


        </BottomTabs.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#17255A',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 3,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 80,

    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    }
})


export default TabNavigator;