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
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'  
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'black',
        borderBottomWidth: 1

    },
})