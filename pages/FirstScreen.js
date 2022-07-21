import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Video } from 'expo-av';
import Colors from "../constants/Colors";
import { useState } from "react";









const FirstScreen = ({navigation}) => {

const video = React.useRef(null)


    
return (
        <View style={styles.screen}>
            <Video 
        
                ref={video}
                style={styles.video}
                source={require('../PLAYPADEL.mp4')}
                shouldPlay={true}
                isMuted={true}
                isLooping={true}
                resizeMode= "cover" 
            
                >
                <View style={styles.menu}>
            
                    <Text style={styles.title}>Conecta, juga y disfruta del mejor padel</Text>
                    <View style={styles.buttonContainer}>
                        <View>
                             <Button  onPress={() => {navigation.navigate('Iniciar Sesion')}} screenOptions={
                                {headerShown: false}
                             } color={Colors.primary} title="Iniciar Sesion"/>
                        </View>
                        <View> 
                             <Button   color={Colors.secondary} title="Registrarme" />
                        </View>
                       
                
              
                </View>
                </View>
                    
               
            </Video>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        width: '100%',
    },
    video: {
        position: 'absolute',
        top: 0,
        left:0,
        bottom:0,
        right:0,
    
      },
      menu: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 350, 
        zIndex: 1
                
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
})

export default FirstScreen