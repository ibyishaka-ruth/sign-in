import React from "react";
import { View,Text,ImageBackground } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Shirts({tittle,heart,image,price}){
    return(
        <View style={{display:'flex',flexDirection:'column'}}>
            <View>
            <ImageBackground source={{uri:image}} style={{width:150,height:180,borderRadius:"30%"}}>
         <View style={{borderRadius:50}}>
               <AntDesign name="hearto" style={{backgroundColor:'white',borderRadius:50,width:30,display:"flex",alignItems:"center",justifyContent:"center",padding:9,marginLeft:120,marginTop:15}}/></View> 
           <Text>{heart}</Text>
            </ImageBackground >
            <Text style={{color:'#6F6F6F' }}>{tittle}</Text>
                <Text style={{fontWeight:'bold'}}>{price}</Text>
                
            </View>
           
        </View>
    );
}