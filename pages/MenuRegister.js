import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground , TextInput} from "react-native";
import ButtonCheck from "../components/Button/Button";

const MenuRegister = () => {
    return (
        <ImageBackground style={styles.image}>
        <View style={styles.container}>
  
            <TextInput style={styles.input} placeholder="Usuario/Email" />
            <TextInput style={styles.input} placeholder="Contraseña" />
            <ButtonCheck />
             
        </View>
               
            </ImageBackground>   
  
     
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingTop: 100,
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1, 
        width: '100%',
        height: '100%',
    }
});


export default MenuRegister;