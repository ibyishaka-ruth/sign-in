import React from "react";
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,TouchableOpacity, View,Image, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput,CheckBox, Title } from 'react-native-paper';
import Card from "./component/card.jsx";
import Pics from "./component/pics.jsx";
import Shirts from "./component/dress.jsx";
export default function Screen() {
    const data=[
        {
            id:1,
            name:"ALL"
        },
        {
            id:2,
            name:"Man"
        },
        {
            id:3,
            name:"Woman"
        },
        {
            id:4,
            name:"Dress"
        },
        {
            id:5,
            name:"babies"
        },

    ]
    const Amafoto=[
        {
        title:"#bestSeller",
        image:"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"flower",
        price:'$300',
    },
    {
        title:"#bestSeller",
        image:"https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"flower",
        price:'$300',
    },
    {
        title:"#bestSeller",
        image:"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"flower",
        price:'$300',
    },
    {
        title:"#bestSeller",
        image:"https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"flower",
        price:'$300',
    },
    ]
    const Amashati=[
        {
            title:'black t-shirt',
            image:"https://images.pexels.com/photos/46212/men-s-shirt-shirt-attire-clothing-46212.jpeg?auto=compress&cs=tinysrgb&w=600",
            price:'$250',
            
        },
        {
            title:'white t-shirt',
            image:"https://images.pexels.com/photos/17293347/pexels-photo-17293347/free-photo-of-clothes-in-neutral-colors-hanging-on-the-racks-in-a-clothing-store.jpeg?auto=compress&cs=tinysrgb&w=600",
            price:'$250',
        },
        {
            title:'white t-shirt',
            image:"https://images.pexels.com/photos/5698862/pexels-photo-5698862.jpeg?auto=compress&cs=tinysrgb&w=600",
            price:'$250',
        },
        {
            title:'white t-shirt',
            image:"https://images.pexels.com/photos/2817452/pexels-photo-2817452.jpeg?auto=compress&cs=tinysrgb&w=600",
            price:'$250',
        }
    ]
  return (
<View style={{backgroundColor:'white'}}>
<ScrollView >
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', marginTop:10,marginHorizontal:25,padding:10 }}>
    <View style={{backgroundColor:'#ECECEC',borderRadius:100}}>
<AntDesign name="arrowleft" size={25}/>
    </View>
    <Text style={{fontWeight:'bold'}}> SEARCH</Text>
    <View>
    <MaterialCommunityIcons name="tune-vertical" size={20}/>
    </View>
    </View>
    <View >
        < TextInput style={{width:'90%',color:'black',fontWeight:'bold',marginTop:20,backgroundColor:'#F7F8FD',justifyContent:'center',
        marginHorizontal:10,borderRadius:50,marginLeft:20 }}
        theme={{roundness:50}}
         mode='offline'
         label='searching...'
         underlineColor="transparent"
         left={<TextInput.Icon size={20}  icon={"magnify"}></TextInput.Icon>}
         right={<TextInput.Icon size={20}  icon={"tune-variant"}></TextInput.Icon>}
        />
    </View>
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false} ><View style={{display:'flex',flexDirection:'row'}}>
        {data.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10}}>
                <Card name={item.name}/>
            </View>
        )
})}</View>

    </ScrollView>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} ><View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        {Amafoto.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Pics name={item.name} tittle={item.title} image={item.image} price={item.price}/>
                
            </View>
        )
})}</View>
    </ScrollView>
    <Text style={{fontWeight:"bold",marginTop:15,marginHorizontal:20,size:100}}>PRODUCT RESULT(43)</Text>
    <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginHorizontal:20}}>
        {Amashati.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between',}}>
                <Shirts name={item.name} tittle={item.title} image={item.image} price={item.price}/>
                
            </View>
        )
})}</View>
    </ScrollView>

</View>
   );
}

const styles = StyleSheet.create({

  }
);