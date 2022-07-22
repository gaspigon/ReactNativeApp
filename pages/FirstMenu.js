import React from "react";
import { View, Text, StyleSheet, Button , TextInput, ImageBackground, Image} from "react-native";
import ButtonCheck from "../components/Button/Button";

import FirstScreen from "./FirstScreen";

const FirstMenu = props => {
  

    return(
        
        <ImageBackground source={require('../assets/padel1.jpeg')} style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.title}> PLAYPADEL</Text>
            <TextInput style={styles.input} placeholder="Usuario/Email" />
            <TextInput style={styles.input} placeholder="Contraseña" />
            <ButtonCheck />
             
        </View>
               
            </ImageBackground>        

      
    )


}

const styles = StyleSheet.create({
    container: {
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
    },
    send:{
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        height: 50,
        backgroundColor: '#00bfff',
    },

    input: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50, 
        padding: 10,
        marginTop: 20,
        width: '80%',
        borderRadius: 20,
        backgroundColor: '#f1f1f1',
        color: '#34434D',
        fontSize: 15,
        paddingStart: 30,

    },
    title: {
       
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        marginTop: 20,
        marginBottom: 80,
    }
 })

 export default FirstMenu;
