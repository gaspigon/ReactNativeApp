import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const ButtonCheck = () => {
    return(
        <TouchableOpacity style={styles.button}>
            <View >
                   <Text style={styles.btn}>Iniciar Sesion</Text>
            </View>
         
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '70%',
        height: 70,
        backgroundColor: 'blue',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        
        
    },
    btn: {
        width: '100%',
        height: '100%',
        fontSize: 20,
        backgroundColor: '#00bfff',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        

        
    }
})

export default ButtonCheck;