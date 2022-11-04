
import * as React from "react";
import { Text, Box,Image, Button, Input,Select,FormControl,CheckIcon,TextArea } from "native-base";
import LoginIcon from '../assets/loginIcon.png'
import { TouchableOpacity,TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AddList() {

  const getCategory = async() =>{
    try {
        const token = await AsyncStorage.getItem('token');
        const user_id = await AsyncStorage.getItem('user_id');
        setCategory({
          user_id
        })
        if (token === null) {
            navigation.navigate("Login")
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        };
        const response = await API.get(`/Categorys?user_id=${user_id}`, config);
        
        setdataCategory(response.data)
    } catch (error) {
        console.log(error);
    }
}

React.useEffect(()=> {
    getCategory()
},[])
  
  return (
    <Box bg="white" flex={1} alignItems="center" >
   
    <Text bold style={{padding:20,paddingTop:80,fontSize:30,height:120 ,width:300,marginRight:50}}>Add List</Text>
    <FormControl w="3/4" maxW="300" isRequired isInvalid>
    <Input
          minWidth="200"
          h={50}
          backgroundColor={"#0000001F"}
          placeholder={"Name"}
          fontSize={15}
          color={"#000"}
          marginBottom={2}
          />


        <FormControl.Label>Choose Category</FormControl.Label>
        <Select minWidth="200" backgroundColor={"#0000001F"}  accessibilityLabel="Choose Service" placeholder="Choose Category" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="Study" value="study" />
          <Select.Item label="HomeWork" value="hw" />
          <Select.Item label="Workout" value="wo" />
        </Select>

        <Input type={"date"} mt={13} color="gray"  /> 

        <TextArea aria-label="t1"backgroundColor={"#0000001F"}  marginTop={5} height={150}numberOfLines={10} placeholder="Description" isInvalid _dark={{
          placeholderTextColor: "gray.300"
        }} mb="5" />




      </FormControl>


        <TouchableOpacity style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 30, marginBottom:10}} >
            <Text bold style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' ,fontSize:20}}>Add List</Text>
        </TouchableOpacity>

        
        



    
        

    </Box>
  );
}