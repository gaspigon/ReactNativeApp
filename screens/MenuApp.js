import React from "react";
import { FlatList} from "react-native";
import { CATEGORIES } from "../data/Categories";
import  GridItem  from "../components/GridItem";



const MenuApp = ({navigation}) => {

    const handleSelectedCategory = (item) => {
        navigation.navigate('Detail', {
            categoryID: item.id,
            name: item.title
        });
    }

    const renderGridItem = ({item}) => (
        <GridItem item={item} onSelected={handleSelectedCategory}/>
    )

    return (
        <FlatList 
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
            keyExtractor={item => item.id}
        />
    )
}




export default MenuApp;