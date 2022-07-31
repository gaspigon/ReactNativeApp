import React from "react";
import { FlatList, View, Text, StyleSheet} from "react-native";
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
        <View>
            <View style={styles.box } >
                  <Text style={styles.title} >Bienvenido! </Text>
            </View>
          
            <FlatList 
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
            keyExtractor={item => item.id}
        />
        </View>

    )
}

const styles = StyleSheet.create({
    box: {

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15,
        marginBottom: 45,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#47484E',
        maxWidth: '80%',
        fontFamily: 'RobotoBold'
    }
})




export default MenuApp;