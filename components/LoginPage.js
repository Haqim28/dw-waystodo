
import * as React from "react";
import { Text, Box,Image, Button, Input } from "native-base";
import LoginIcon from '../assets/loginIcon.png'
import { TouchableOpacity,TextInput } from "react-native";



export default function LoginPage() {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
    <Image source={LoginIcon} alt= "first" style={{width: 228, height: 230 , marginBottom:20}} />     
    
    <Text bold style={{padding:20,fontSize:40,height:70 ,marginRight:190}}>Login</Text>

      <TextInput placeholder="Email" style={{backgroundColor: '#0000001F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 0 , padding: 10}}/>
  
      <TextInput placeholder="Password" style={{backgroundColor: '#0000001F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 10 , padding: 10}}/>
   


        <TouchableOpacity style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 30, marginBottom:10}}>
            <Text bold style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>

        <Text bold>New Users ? 
          <Text style={{color:"red"}}>  Register</Text>
        </Text>

       

    </Box>
  );
}