import React from "react";
import {View, Text} from "react-native";
import Profile from "../components/CartItem";
import CartReducer from "../store/reducers/cart.reducer";


const ProfileScreen = () => {
    return (
        <View>
            <CartItem  />
        </View>
    );
}

export default ProfileScreen;