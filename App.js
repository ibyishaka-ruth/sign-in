import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { CheckBox } from "react-native-elements";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.content}>
      <View style={styles.close}><FontAwesome name='close'/></View>
    <View style={styles.container}>
      <Text style= {{fontWeight: 'bold', fontSize: 20}}>Sign In</Text>
      <Text style= {{marginTop: "5%"}}> Welcome back! Please enter your details</Text>
      <View style={styles.email}>
<Zocial name='email' color={'purple'}/>
        <TextInput style={styles.email1} placeholder="enter your email">
        </TextInput>
      </View>
      <View style={styles.password}>
        <Fontisto name='locked' color={'skyblue'}/>
        <TextInput style={styles.pass} placeholder="enter your password">
        </TextInput>
      </View>
      <View style={styles.Checkbox}>
  
      <CheckBox style={styles.Checkbox} 
        title="Remember "/>
      </View>
    </View>
    <View style= {{marginTop: "40%"}}>
    <View style={styles.forgot}>
      <TouchableOpacity>
      <Text  style={styles.forgot1} >Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sign}> 
      <Text style={styles.sign1}>Sign In</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.bottom} >
      <TouchableOpacity><Text> create account</Text>
      </TouchableOpacity>
      <TouchableOpacity><Text style={styles.up}>Sign up</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.apps}>
    <AntDesign style={styles.face} name='facebook-square' size={30} color={'skyblue'}/>
    <AntDesign style={styles.goog} name='google' size={30} color={'orange'}/>
    <AntDesign style={styles.apple} name='apple1' size={30} color={'black'}/>
  
    </View>
    </View>
    
    <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
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
  Checkbox:{
padding:1
  },
  Checkbox:{
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
