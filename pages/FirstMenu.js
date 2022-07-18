import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const FirstMenu = (props) => {
  

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Bienvenido a la Aplicacion</Text>    
            
        </View>
    )


}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
         
    }
 })

 export default FirstMenu;
