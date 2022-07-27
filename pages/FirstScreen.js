import React from "react";
import { View, Text, StyleSheet,  TouchableOpacity } from "react-native";
import { Video } from 'expo-av';











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
                     
                             <TouchableOpacity  onPress={() => {navigation.navigate('Iniciar Sesion')}} screenOptions={
                                {headerShown: false} } style={styles.touch}>
                             
                                <Text style={styles.button}>Iniciar Sesion</Text>
                             </TouchableOpacity>
                     
                     
                            <TouchableOpacity   style={styles.touch1}>
                                <Text style={styles.button}>Registrarme</Text>
                            </TouchableOpacity>
                             
                       
                       
                
              
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
        fontFamily: 'RobotoBold'

    },
    button: {
        fontSize: 20,
        height: 50,
        width: '100%',
        marginTop: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer: {
     
        height: 200,
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    
    },
    touch: {
        backgroundColor: '#369B43',
        height: 50,
        width: '50%',
        marginTop: 20,
        marginBottom: 20,   
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch1: {
        backgroundColor: '#456084',
        height: 50,
        width: '50%',
        marginTop: 20,
        marginBottom: 20,   
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default FirstScreen