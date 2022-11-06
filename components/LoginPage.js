
import { Box, Image, Input, Text } from "native-base";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import LoginIcon from '../assets/loginIcon.png';
import { API } from "./config/api";

import AsyncStorage from '@react-native-async-storage/async-storage';




export default function LoginPage({navigation}) {
  const [form, setForm] = React.useState("");
  console.log("this form",form);

  function handleChange(name,value) {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      
      console.log(response);
      const config = {
        headers: {
        'Content-type': 'application/json',
        },
    };
    const body = JSON.stringify(form);
    const response = await API.post("/auth/login", body,config);

    if (response) {
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem("user_id",response.data.user._id);
      await AsyncStorage.setItem("name",response.data.user.firstName);

    }
      
    const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log(response.data.user.firstName);
        console.log(token);
        navigation.navigate("ListTodo")
        alert(`Selamat ${response.data.user.firstName} kamu berhasil Login`);
    }
    } catch (e) {
      console.log(e);
      console.log("Ada yang salah ");
      alert("Salah email atau password");
    }
  };

  return (
    <Box bg="white" flex={1} alignItems="center" justifyContent="center">
    <Image source={LoginIcon} alt= "first" style={{width: 228, height: 230 , marginBottom:20}} />     
    
    <Text bold style={{padding:20,fontSize:40,height:70 ,marginRight:190}}>Login</Text>

    <Input
          w={"80%"}
          h={50}
          backgroundColor={"#0000001F"}
          placeholder={"Email"}
          fontSize={15}
          color={"#000"}
          marginBottom={2}
          name="email"
          onChangeText={(value) => handleChange("email",value)}
          value={form.email}

          />
    
      <Input
          w={"80%"}
          h={50}
          backgroundColor={"#0000001F"}
          placeholder={"Password"}
          type={"password"}
          fontSize={15}
          color={"black"}
          name="password"
          onChangeText={(value) => handleChange("password",value)}
          value={form.password}
          />

        <TouchableOpacity onPress={handleSubmit}
        style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 30, marginBottom:10}}>
            <Text bold style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>

        <Text bold>New Users ? 
          <Text onPress={() => navigation.navigate("RegisterPage")}
          style={{color:"red"}} >  Register</Text>
        </Text>

       

    </Box>
  );
}