import React from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground,Button,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";

const CartScreen = () => {
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
}

