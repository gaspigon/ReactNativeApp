import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const ButtonCheck = (props) => {

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.button} >
                   <Text style={styles.btn}>{props.title}</Text>
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