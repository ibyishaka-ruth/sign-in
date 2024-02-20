import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,TouchableOpacity, View,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput,CheckBox } from 'react-native-paper';

export default function Login({navigation}) {
  return ( 
    <View style={{color:'#F3F5F6'}}>
     <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:40}}>
        <Image source={require('./assets/logg.png') } 
        style={{height:200,width:'100%',backgroundColor:'#9F9DF3' }}/>
    </View>
    <View style={{backgroundColor:'white',borderTopLeftRadius:40,borderTopRightRadius:40,position:'absolute',width:'100%',marginTop:200}}>
    <Text 
    style={{ justifyContent:'center',alignItems:'center',textAlign:'center', flexDirection:'row',fontWeight:'bold',padding:15,fontSize:20,marginBottom:10,marginTop:60 }}>Login</Text>
    <View>
    
    < TextInput style={{width:'90%',color:'#FEFCFC',fontWeight:'bold',marginHorizontal:20,backgroundColor:'#FEFCFC' }}
        mode='offline'
        label='User name'
        left={<TextInput.Icon size={15}  icon={"account-outline"} color={'#FAEAE4'}></TextInput.Icon>}
        />
        <TextInput style={{width:'90%',color:'black',fontWeight:'bold',marginHorizontal:20,marginTop:20,backgroundColor:'#FEFCFC' }}
         mode="offline"
         label="Password"
         left={<TextInput.Icon icon={"lock-outline"} color={'#B2B2F2'}></TextInput.Icon>}
        />
        </View>
     <View style={{padding:2,marginTop:80,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
       <TouchableOpacity>
       <Text style={{ color:'#30A2FF',fontWeight:'bold',textAlign:'center' ,padding:10}} >Forgot password?</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() =>
        navigation.navigate('register')
      }>
  <Text 
  style={{backgroundColor:'#1B1E36',color:'white',fontWeight:'bold',textAlign:'center',padding:10, borderRadius:30,marginHorizontal:15,marginTop:30}}>
    Login</Text>
    
       </TouchableOpacity>
      
        </View>
        <View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:20,marginTop:30}}>
     <AntDesign style={{}} name='facebook-square' size={30} color={'#2C69FF'}/>
     <AntDesign style={{}} name='google' size={30} color={'orange'}/>
     <AntDesign style={{}} name='apple1' size={30} color={'black'}/>
  
     </View>
        </View>
     <StatusBar style="auto" />
     </View>
   </View>
     
   ) 
 }
 
 const styles = StyleSheet.create({
 
   }
 );