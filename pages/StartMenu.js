import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../components/constants/Colors";

const StartMenu = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Conecta, juga y disfruta del mejor padel</Text>
            <View style={styles.buttonContainer}>
                <Button  onPress={() => {}} color={Colors.primary} title="Iniciar Sesion"/>
                <Button  onPress={() => {}} color={Colors.secondary} title="Registrarme" />
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
        maxWidth: '80%',

    },
    buttonContainer:{
        
    },
    btn: {

    }
})


export default StartMenu