import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,TouchableOpacity, View,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput,CheckBox } from 'react-native-paper';

export default function Regist({navigation}) {
  return ( 
    <View style={{color:'#F3F5F6'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:50}}>
        <Image source={require('./assets/regg.png') } 
        style={{height:200,width:'50%', }}/>
    </View>
    <View style={{marginTop:30}}>
    <Text 
    style={{ justifyContent:'center',alignItems:'center',textAlign:'center', flexDirection:'row',fontWeight:'bold',padding:15,fontSize:20,marginBottom:10 }}>Register</Text>
    <View>

    < TextInput style={{width:'90%',color:'#FEFCFC',fontWeight:'bold',marginHorizontal:20,backgroundColor:'#FEFCFC' }}
        mode='offline'
        label='User name'
        left={<TextInput.Icon size={15}  icon={"account-outline"} color={'#FAEAE4'}></TextInput.Icon>}
        />
           < TextInput style={{width:'90%',color:'black',fontWeight:'bold',marginHorizontal:20,marginTop:20,backgroundColor:'#FEFCFC' }}
         mode='offline'
         label='Email'
         left={<TextInput.Icon size={15} color={'#88CCA9'} icon={"email-outline"}></TextInput.Icon>}
        />
          <TextInput style={{width:'90%',color:'black',fontWeight:'bold',marginHorizontal:20,marginTop:20,backgroundColor:'#FEFCFC' }}
         mode="offline"
         label="Password"
         left={<TextInput.Icon icon={"lock-outline"} color={'#B2B2F2'}></TextInput.Icon>}
        />
  <TouchableOpacity onPress={() =>
        navigation.navigate('home')
      }> 

  <Text 
  style={{backgroundColor:'#1B1E36',color:'white',fontWeight:'bold',textAlign:'center',padding:20, borderRadius:30,marginHorizontal:15,marginTop:30}}>
    Register</Text>
    </TouchableOpacity>
    </View>
       <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:20,marginTop:10}}>
     <AntDesign style={{}} name='facebook-square' size={30} color={'#2C69FF'}/>
     <AntDesign style={{}} name='google' size={30} color={'orange'}/>
     <AntDesign style={{}} name='apple1' size={30} color={'black'}/>
  
     </View>
      </View>
     <StatusBar style="auto" />
     </View>

     
   ) 
 }
 
 const styles = StyleSheet.create({
 
   }
 );