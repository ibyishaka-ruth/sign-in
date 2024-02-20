import React from "react";
import { View,Text,ImageBackground } from "react-native";

export default function Pics({tittle,name,image,price}){
    return(
        <View style={{borderRadius:20}}>
            <ImageBackground source={{uri:image}} style={{width:200,height:180}}>
            <Text style={{padding:8,backgroundColor:'#d69548',borderRadius:50,textAlign:'left',margintopright:20,width:90,margin:5}}>{tittle}</Text>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:109,backgroundColor:'black',padding:8,opacity:0.5}}>
                
                <Text style={{color:'white'}}>{name}</Text>
                <Text style={{color:'white'}}>{price}</Text>
            </View>
            </ImageBackground>
        </View>
    );
}