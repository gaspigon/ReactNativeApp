import React, {useEffect} from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";

import { useSelector, useDispatch } from "react-redux";

//actions
import { filteredDescription, selectDescription } from "../store/actions/description.action";


const CategoryMenuScreen = ({navigation, route}) => {

    //redux
    const dispatch = useDispatch();
    const description = useSelector(state => state.description.filteredDescription);
    const category = useSelector(state => state.categories.selected);

    useEffect(() => {
        dispatch(filteredDescription(category.ID));
    },[])

    const handleSelected = (item) => {
        dispatch(selectDescription(item.id));
        navigation.navigate('Register', {
            name: item.name
        });
    }

    const renderItemMenu  = ({item}) => (
        <Card item={item} onSelected={handleSelected}/>
         
    )

    return (
        <FlatList 
            data={description} 
            renderItem={renderItemMenu}
            keyExtractor={item => item.id}
            


        />
    )

}



export default CategoryMenuScreen;