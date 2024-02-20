import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Zocial from 'react-native-vector-icons/Zocial';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import { CheckBox } from "react-native-elements";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInput,CheckBox } from 'react-native-paper';
import Amafoto from './image';
import Regist from './register';
import Login from './log';
import Bitcoin from './bitcoin'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen from './task';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Screen'>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='register' component={Regist} />
        <Stack.Screen name='home' component={Bitcoin}/>
        < Stack.Screen name='Screen' component={Screen} options={{title:''}}/>
      </Stack.Navigator>
</NavigationContainer>
 ) 
}

const styles = StyleSheet.create({
  container: {
   justifyContent:'center',
   alignItems:'center',
    padding:20
  },
  content:{
    marginTop:30,
    padding:20,
  },
  close:{
    fontSize:10
  },
  email:{
    width: "100%",
    flexDirection:'row',
    // justifyContent:'space-around',
    alignItems:"center",
    padding:10,
    backgroundColor:'lavender',
    borderRadius:10,
    marginTop:20,
  },
  email1:{
    marginLeft:30

  },
  password:{
    width: "100%",
    flexDirection:'row',
    // justifyContent:'space-around',
    alignItems:"center",
    padding:10,
    backgroundColor:'lavender',
    borderRadius:10,
    marginTop:20,

  },
  pass:{
    marginLeft:30
  },

  checkbox:{
    width: "100%",
    flexDirection:'row',
    // justifyContent:'space-around',
    alignItems:"center",
    padding:2,
    // backgroundColor:'#E3E1D9',
    borderRadius:10,
    marginTop:20,
  },
  forgot:{
    // margin:5,
    justifyContent:'center',
    alignItems:'center',
    // color:'#40A2E3'
    width:"100%",

  },
  forgot1:{
    color:'#40A2E3',
    padding:5,
  },
  sign:{
    padding:15,
    backgroundColor:'#40A2E3',
    width:"100%",
    justifyContent:'center',
    // alignItems:'center',
    borderRadius:40,
    marginTop: "6%"

  },
  sign1:{
    width:'100%',
    justifyContent:'center',
    textAlign:'center',
    padding:5,
    color:'#fff'
  },
  bottom:{
    flexDirection:'row' ,
    justifyContent:'space-between',
    padding:15,
  },
  up:{
    color:'#FFA447',
    backgroundColor:'#EEEDEB',
    padding:5,
    borderRadius:10,
  },
  apps:{
    Color:'#40A2E3',
    padding:30,
    flexDirection:'row',
    justifyContent:'space-evenly',
    
  },
  face:{
    borderRadius:10,
    backgroundColor:'lavenda',
  }
});
