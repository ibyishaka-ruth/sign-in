import React from "react";
import { View,Text } from "react-native";

export default function Card({name}){
    return(
        <View style={{borderWidth:1,borderRadius:50,paddingVertical:3,paddingHorizontal:15}}>
            <Text style={{textAlign:'center',padding:10}}>{name}</Text>
        </View>
    );
}