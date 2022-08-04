import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Card = ({item, onSelected}) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)} >
            <View style={styles.card}>
                <View >
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View >
                    <Text style={styles.details}>{item.description}</Text>
                    <Text style={styles.details}>{item.category}</Text>  
                </View>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#B7BFB0',
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'RobotoBold',
    },
    details: {
        fontSize: 15,
    } 
})

export default Card;