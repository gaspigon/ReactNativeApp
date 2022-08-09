import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";

const MenusDetailScreen = () => {

    const description = useSelector(state => state.description.selected);

    return (
        <View style={styles.screen}>
            <Text> MenusDetailScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MenusDetailScreen;