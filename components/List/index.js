import { FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'


export default function List(props) {

    const { itemList, onHandlerModal } = props
    console.log(itemList)
    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text  style={{color : data.item.completed ? 
                        'green' : null, textDecorationLine : data.item.completed ? 'line-through' : null}}>{data.item.value}
                         {data.item.completed ? <Text style={{marginRight:'50%'}}> Completado</Text> : null } </Text>
                        
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: '10%',
        height: 50,
        width: '100%'
        
       
    },
    text: {
        textDecorationLine: 'none',
        justifyContent: 'space-between',
        alignContent: 'space-between'
        
    }
})