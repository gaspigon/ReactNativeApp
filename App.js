
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import React from 'react';
import PlayPadelNavigator from './navigation/PlayPadelNavigator';
import {Provider} from 'react-redux'
import store from './store'





export default function App() {
  const [loaded] = useFonts({ RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'), RobotoBlackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'), RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'), RobotoItalic: require('./assets/fonts/Roboto-Italic.ttf'), RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'), RobotoThin: require('./assets/fonts/Roboto-Thin.ttf')})
  
  

    if(!loaded) return <AppLoading />
    
  return (
    <Provider store={store}>

    <PlayPadelNavigator />
    
    </Provider>
 
    
  );
}


  

