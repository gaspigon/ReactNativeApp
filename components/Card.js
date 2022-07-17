import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Card = props => {
    return (
        <View style={{...styles.inputCard, ...props.style}}>
            {props.children}
        </View>
    );

}

const styles = Stylesheet.create({
    inputCard:{
        
    }
})