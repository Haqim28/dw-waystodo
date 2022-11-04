
import * as React from "react";
import { Text, Box,Image, Button, Input, Alert } from "native-base";
import LoginIcon from '../assets/loginIcon.png'
import { TouchableOpacity,TextInput } from "react-native";
//import for database register
import { useState } from "react";
import { useMutation } from 'react-query';   
import {API} from "./config/api"

export default function RegisterPage({navigation}) {

  const [form, setForm] = useState("");

  function handleChange(name,value) {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (async () => {
    try {
      const response = await API.post("/auth/register", form);
      console.log(response);
      alert(`Selamat ${response.data.user.firstName} kamu berhasil Terdaftar`);
      navigation.navigate("LoginPage")
    } catch (e) {
      console.log(e);
      console.log("this error ");
      alert("Gagal mendaftar");
    }
  });

  return (
    <Box bg="white" flex={1} alignItems="center" justifyContent="center">
    <Image source={LoginIcon} alt= "first" style={{width: 228, height: 230 , marginBottom:20}} />     
    
    <Text bold style={{padding:20,fontSize:40,height:70 ,marginRight:150}}>Register</Text>

      <TextInput 
      placeholder="Email" 
      keyboardType={"email-address"}
      value={form.email}
      name="email"
      onChangeText={(value)=>handleChange("email",value)}
      style={{backgroundColor: '#0000001F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 0 , padding: 10}}
      />
  
      <TextInput 
      placeholder="Name" 
      value={form.firstName}
      name="firstName"
      onChangeText={(value)=>handleChange("firstName",value)}
      style={{backgroundColor: '#0000001F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 10 , padding: 10}}/>

      <TextInput 
      placeholder="Password"
      value={form.password}
      name="password" 
      onChangeText={(value)=>handleChange("password",value)}
      type={"password"}style={{backgroundColor: '#0000001F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 10 , padding: 10}}/>
   


        <TouchableOpacity onPress={handleSubmit}
        style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 30, marginBottom:10}}>
            <Text bold style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' ,fontSize:20}}>Register</Text>
        </TouchableOpacity>

        <Text bold>Join us before ? 
          <Text onPress={() => navigation.navigate("LoginPage")} 
          style={{color:"red"}}>  Login</Text>
        </Text>

       

    </Box>
  );
}