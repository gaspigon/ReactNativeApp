
import { Button, StyleSheet, TextInput, View,Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

import React from 'react';
import FirstMenu from './pages/FirstMenu';
import FirstScreen from './pages/FirstScreen';





export default function App() {

  const [userOption, setUserOption ] = useState(false)

  const handlerPress = () => {
    setUserOption(true)
    }

    const handlerBack = () => {
      setUserOption(false)
      }
    

let content = <FirstScreen onScreen={handlerPress} />

  if(userOption){
    content = <FirstMenu switchScreen={handlerBack} />
  }


  return (
    <View style={styles.screen} >

    <View>
      {/*<FirstScreen />*/}
      {content}
     
    </View>
  
     
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    height: '100%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left:0,
    bottom:0,
    right:0,

  },
  menu: {
    zIndex: 1,
  }

  

});
