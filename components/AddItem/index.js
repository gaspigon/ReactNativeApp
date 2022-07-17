import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, onHandlerAddItem } = props

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Escribe aqui' 
                style={styles.input} 
                value={textItem}
                onChangeText={onHandlerChangeItem}  
            />
            <Button title='Add'onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'center' 

    },
    input: {
        display:'flex',
        alignItems: 'center',
        marginLeft: 50,
        width: '50%',
        height: 50,
        borderColor: 'white',
        borderBottomWidth: 1

    },
})