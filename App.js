
import { Button, StyleSheet, TextInput, View,Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

import React from 'react';
import CustomModal from './components/Modal';
import AddItem from './components/AddItem';
import List from './components/List';
import { Video } from 'expo-av';
import StartMenu from './pages/StartMenu';



export default function App() {

  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const video = React.useRef(null)

/*
  const onHandlerChangeItem = (text) => {
    setTextItem(text)
  }

  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, {id: Date.now() , value: textItem }])
    setTextItem('')
  }

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !==id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id ===id))
    setModalVisible(!modalVisible)
  } 

  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.findIndex((item) => item.id === id)
    itemList[itemCompleted].completed = true
    setItemList([...itemList])
    setModalVisible(!modalVisible)
  }
  */

  return (
    <View style={styles.screen} >

      <Video 
      ref={video}
      style={styles.video}
      source={require('./PLAYPADEL.mp4')}
      shouldPlay={true}
      isMuted={true}
      isLooping={true}
      resizeMode= "cover" 
      >

        
    {/*}
         <CustomModal 
      modalVisible={modalVisible}
      itemSelected={itemSelected}
      onHandlerCompleteItem={onHandlerCompleteItem}
      onHandlerDeleteItem = {onHandlerDeleteItem}
  
   
      />

  */}

      {/*
      <AddItem 
              textItem={textItem}
              onHandlerAddItem={onHandlerAddItem}
              onHandlerChangeItem={onHandlerChangeItem}
              />

      <List 
              itemList={itemList}
              onHandlerModal={onHandlerModal} />
       
*/}
      <StartMenu />

      </Video>
  
     
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left:0,
    bottom:0,
    right:0,

  }

  

});
