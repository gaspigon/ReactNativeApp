import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StartMenu = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Conecta, juga y disfruta del mejor padel</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.btn}  title="Iniciar Sesion"/>
                <Button style={styles.btn}  title="Registrarme" />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,

    },
    buttonContainer:{
        
    },
    btn: {

    }
})


export default StartMenu