
import {  StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'

import React from 'react';
import FirstMenu from './pages/FirstMenu';
import FirstScreen from './pages/FirstScreen';
import PlayPadelNavigator from './navigation/PlayPadelNavigator';





export default function App() {
  const [loaded] = useFonts({ RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'), RobotoBlackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'), RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'), RobotoItalic: require('./assets/fonts/Roboto-Italic.ttf'), RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'), RobotoThin: require('./assets/fonts/Roboto-Thin.ttf')})
  
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

    if(!loaded) return <AppLoading />
    
  return (
    <PlayPadelNavigator />
    
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
