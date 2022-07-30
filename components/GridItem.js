import React from "react";
import { View, Text, StyleSheet,  TouchableOpacity } from "react-native";

const GridItem = ({item, onSelected}) => {
    return (
        <View style={styles.gridItem} >
            <TouchableOpacity onPress={() => onSelected(item)}
                style={{...styles.container, backgroundColor: item.color}} >
                <View>
                      <Text style={styles.title}>{item.title}</Text>
                </View>
              
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        maxWidth: '80%',
        fontFamily: 'RobotoBold'
    }
})

export default GridItem;