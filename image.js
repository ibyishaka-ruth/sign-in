import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,TouchableOpacity, View,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Amafoto() {
  return ( 
    <View>
    <View style={{marginTop:50}}>
    < AntDesign name='arrowleft' style={{padding:10}}/>
    </View>
    <View style={{ display:'flex', flexWrap:'wrap',justifyContent:'center',flexDirection:'row',marginTop:30, gap:20,marginHorizontal:18}}>
       
        {/* <Text>HELLO WORLD</Text> */}
        <Image source={require('./assets/cherries.jpg') } style={{height:150,width:'45%' }}/>
        <Image source={require('./assets/popsicle.jpg') } style={{height:150,width:'45%'}}/>
        <Image source={require('./assets/sandwich.jpg') } style={{height:150,width:'45%'}}/>
        <Image source={require('./assets/wine.jpg') }style={{height:150,width:'45%'}}/>
    <StatusBar style="auto" />
    </View>
    </View>
  ) 
}

const styles = StyleSheet.create({

  }
);