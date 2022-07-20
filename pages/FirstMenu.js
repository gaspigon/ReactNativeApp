import React from "react";
import { View, Text, StyleSheet, Button , TextInput, ImageBackground} from "react-native";

import FirstScreen from "./FirstScreen";

const FirstMenu = props => {
  

    return(
        
            <ImageBackground source={{uri: 'https://im.ge/i/FOfkW0'}} resizeMode="cover" style={styles.image}>
            <View style={styles.screen}>
            <View style={styles.boxInput}>
                <TextInput style={styles.input} placeholder="Usuario/Email" />
                <TextInput style={styles.input} placeholder="Contraseña" />
                <Button style={styles.send} title="Iniciar Sesion"/>
                 
            </View>
            <Text style={styles.title}></Text>    
            <View>
              
                <Button title="volver" onPress={() => props.switchScreen()} />
            </View>
            </View>
            </ImageBackground>

      
    )


}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 20,
        paddingTop: 100,
        


    },
    image: {
        
        width: '100%',
        height: 900,
    },
    send:{
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        height: 50,
        backgroundColor: '#00bfff',
    },

    boxInput: {
        backgroundColor: '#fff',
        width: '80%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,

    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        margin: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        borderColor: '#000',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
        maxWidth: '80%',
        color: 'black',

    }
 })

 export default FirstMenu;
