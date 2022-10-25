import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SScreen = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Bottoms")}>
            <Image style={{ width: "100%", height: "100%" }}
                source={require("../assets/mm.jpg")}
            />
        </TouchableOpacity>
    )

}

export default SScreen