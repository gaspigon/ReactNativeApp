import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const ButtonCheck = () => {
    return(
        <TouchableOpacity style={styles.button}>
                   <Text style={styles.btn}>Iniciar Sesion</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#369B43',
        height: 50,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
        
        
    },
    btn: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',

        

        
    }
})

export default ButtonCheck;