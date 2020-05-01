import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import * as firebase from 'firebase';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from "./components/NewsScreen"
import FullNews from "./components/FullNews"

var firebaseConfig = {
  apiKey: "AIzaSyB8BerGV3NCN7xA4mnOIiAI4T9s60-6urs",
  authDomain: "newsapp-a3bdc.firebaseapp.com",
  databaseURL: "https://newsapp-a3bdc.firebaseio.com",
  projectId: "newsapp-a3bdc",
  storageBucket: "newsapp-a3bdc.appspot.com",
  messagingSenderId: "540017760418",
  appId: "1:540017760418:web:12b39bde5403408eba9ffb",
  measurementId: "G-GEE4Z585CF"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}



class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={email:"",password:""}
  }

  authenticate(){
    firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {console.log("AUTHENTICATED"); this.props.navigation.navigate("NewsScreen",{navigation:this.props.navigation}); })
            .catch(error => console.log(error))
  }


  render(){
  return (
    <View style={{margin:50}}>
      <Text>Email</Text>
      <TextInput onChangeText={text=>this.setState({email:text})} style={{height:40,borderColor:"gray",borderWidth:1,marginBottom:20,borderRadius:3}} ></TextInput>
      <Text>Password</Text>
      <TextInput secureTextEntry={true} style={{height:40,borderColor:"gray",borderWidth:1,borderRadius:3}} onChangeText={text=>this.setState({password:text})}></TextInput>
      <Button title="LOGIN" style={{marginTop:50}} onPress={()=>this.authenticate()}></Button>
      <TouchableOpacity style={{alignItems:"center",marginTop:50}} onPress={()=>this.props.navigation.navigate("Signup")}>
        <Text style={{color:"green"}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
}

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  register(){
    if(this.state.password!=this.state.confirmpassword){
      return;
    }
    firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {console.log("AUTHENTICATED");})
            .catch(error => console.log(error))
  }


  render(){
    return(
      <View style={{margin:50}}>
      <Text>Email</Text>
      <TextInput onChangeText={text=>this.setState({email:text})} style={{height:40,borderColor:"gray",borderWidth:1,marginBottom:20,borderRadius:3}} ></TextInput>
      <Text>Password</Text>
      <TextInput secureTextEntry={true} style={{height:40,borderColor:"gray",borderWidth:1,borderRadius:3}} onChangeText={text=>this.setState({password:text})}></TextInput>
      
      <Text style={{marginTop:20}}>Confirm Password</Text>
      <TextInput secureTextEntry={true} style={{height:40,borderColor:"gray",borderWidth:1,borderRadius:3}} onChangeText={text=>this.setState({confirmpassword:text})}></TextInput>
      <Button title="Sign Up" style={{marginTop:50}} onPress={()=>this.register()}></Button>
    </View>
    )
  }
}


const Stack = createStackNavigator();
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Login}></Stack.Screen>
          <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
          <Stack.Screen name="NewsScreen" component={NewsScreen}></Stack.Screen>
          <Stack.Screen name="FullNews" component={FullNews}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;