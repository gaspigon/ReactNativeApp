
import { Button, StyleSheet, TextInput, View,Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

import React from 'react';
import CustomModal from './components/Modal';
import AddItem from './components/AddItem';
import List from './components/List';


export default function App() {

  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)


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

  return (
    <View style={styles.screen} >
      <CustomModal 
      modalVisible={modalVisible}
      itemSelected={itemSelected}
      onHandlerCompleteItem={onHandlerCompleteItem}
      onHandlerDeleteItem = {onHandlerDeleteItem}
  
   
      />



      
      <AddItem 
              textItem={textItem}
              onHandlerAddItem={onHandlerAddItem}
              onHandlerChangeItem={onHandlerChangeItem}
              />

      <List 
              itemList={itemList}
              onHandlerModal={onHandlerModal} />
       
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    padding: 30,
    flex: 1
  },

  

});
