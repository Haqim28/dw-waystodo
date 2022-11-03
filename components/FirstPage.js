
import * as React from "react";
import { Text, Box,Image, Button } from "native-base";
import FirstImage from '../assets/firstimage.png'
import { TouchableOpacity } from "react-native";


export default function FirstPage({navigation}) {
  return (
    <Box bg="white" flex={1} alignItems="center" justifyContent="center">
    <Image source={FirstImage} alt= "first" style={{width: 228, height: 258}} />     
    <Text fontFamily="body" fontWeight={400}  fontSize={50} bold>
        <Text>Ways </Text>   
        <Text style={{color: "#B82020"}}>To</Text>
        <Text style={{color: "#FF5555"}}>DO</Text>
      </Text>

      <Text   style={{marginHorizontal:20}}>
        Write your activity and finish your activity. 
      </Text>
      Fast, Simple and Easy to Use

        <TouchableOpacity         onPress={() => navigation.navigate("LoginPage")}
style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 120}}>
            <Text style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' }} >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("RegisterPage")}
        style={{backgroundColor: '#0000004F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center', marginTop:10}}>
            <Text style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' }}>Register</Text>
        </TouchableOpacity>

    </Box>
  );
}