
import * as React from "react";
import { Text, Box,Image, Button, Input } from "native-base";
import LoginIcon from '../assets/loginIcon.png'
import { TouchableOpacity,TextInput } from "react-native";



export default function AddCategory() {
  return (
    <Box bg="white" flex={1} alignItems="center" >
   
    <Text bold style={{padding:20,paddingTop:80,fontSize:30,height:120 ,width:300,marginRight:50}}>Add Category</Text>
  
      <TextInput placeholder="Name" style={{backgroundColor: '#0000001F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 10 , padding: 10}}/>

        <TouchableOpacity style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 30, marginBottom:10}}>
            <Text bold style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' ,fontSize:20}}>Add Category</Text>
        </TouchableOpacity>

        <Text bold style={{padding:20,paddingTop:80,fontSize:30,height:120 ,width:300,marginRight:50}}>List Category</Text>
        
      
    <Text style={{marginTop: 20,  marginRight:100}}>

        <Button size="sm" marginRight={20}>Study   </Button>
        <Button size="sm" colorScheme="secondary" style={{marginHorizontal:20}}>
            HomeWork
          </Button>
          <Button size="sm" >
            WorkOut
          </Button>
    </Text>


    
        

    </Box>
  );
}