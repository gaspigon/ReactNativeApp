import React from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";
import { DESCRIPTION } from "../data/Description";


const CategoryMenuScreen = ({navigation, route}) => {
    const Menu = DESCRIPTION.filter(item => item.category === route.params.categoryID)

    const handleSelected = (item) => {
        navigation.navigate('Register', {
            productID: item.id,
            name: item.name
        });
    }

    const renderItemMenu  = ({item}) => (
        <Card item={item} onSelected={handleSelected}/>
         
    )

    return (
        <FlatList 
            data={Menu} 
            renderItem={renderItemMenu}
            keyExtractor={item => item.id}
            


        />
    )

}



export default CategoryMenuScreen;