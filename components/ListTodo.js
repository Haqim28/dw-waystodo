import { Box, Button, Card, CheckIcon, FormControl, Image, Input, ScrollView, Select, Text, View } from "native-base";
import * as React from "react";
import Profile from '../assets/profile.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from "./config/api";
import axios from 'axios'


export default function ListTodo({navigation}) {
  const [data, setData] = React.useState([])

  const getData = async() => {

    try {
        const token = await AsyncStorage.getItem('token');
        if (token === null) {
            navigation.navigate("Login")
            console.log("token kosong");
        }

        const config = {
            headers: {
              'Content-type': 'application/json',
              Authorization: 'Bearer ' + token 
            },
        };
        

        const response = await API.get("/Users", config)       
        setData(response.data)
        console.log(response.data);
    
    } catch (error) {
        console.log(error);    
    }
}

React.useEffect(() => {
    getData()
},[])

  return (
    <Box bg="white" flex={1} alignItems="center" >
      <View style={{flexDirection : "row"}}>

    <Text bold style={{paddingTop:80,paddingLeft:30,fontSize:30,height:120 ,width:300}}>Hi Radit</Text>
    <Image  source={Profile} style={{width : 50, height:50, marginTop:55,paddingTop:30,borderRadius: 20 }} alt="profile"></Image>
      </View>
    <FormControl w="3/4" maxW="300" isRequired isInvalid>
    <Input
          minWidth="200"
          mt={30}
          h={50}
          backgroundColor={"#0000001F"}
          placeholder={"Search List"}
          fontSize={15}
          color={"#000"}
          marginBottom={2}
          />



          <View style={{flexDirection : "row"}}>

                <Input type={"date"} mr={3} w={20} h={12} mt={2}color="gray"  /> 

                <Select  ml={2}w={20}   backgroundColor={"#0000001F"}  accessibilityLabel="Choose Service" placeholder="Category" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />
              }} mt="1">
                  <Select.Item label="Study" value="study" />
                  <Select.Item label="HomeWork" value="hw" />
                  <Select.Item label="Workout" value="wo" />
                </Select>

                  <Select ml={2} w={20} backgroundColor={"#0000001F"}  accessibilityLabel="Choose Service" placeholder="Status" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />
                }} mt="1">
                    <Select.Item label="Done" value="Done" />
                    <Select.Item label="ToDo" value="ToDo" />
                    <Select.Item label="Doing" value="Doing" />

                </Select>

        </View>
      </FormControl>

      {/* ================================================= */}
    
<ScrollView mt={8} h={100}>

      <Card w={300} h={200} borderRadius={10} mt={5} back="red">
              <View style={{flexDirection : "row"}}>  
                <Text mt={1} bold>Study Golang</Text>
                <Button bold size="sm" marginRight={20} ml={120} backgroundColor={"#81C8FF"}> Study   </Button>
              </View>
              <Text w={205} h={100}>
                Lorem, ipsum dolor sit amet consectetur orem, ipsum dolor sit amet consectetur 
              </Text>
              <Text>
                  Date 19-20-2020
              </Text>
      </Card>

      <Card w={300} h={200} borderRadius={10} mt={5}>
              <View style={{flexDirection : "row"}}>  
                <Text mt={1} bold>Study Golang</Text>
                <Button bold size="sm" marginRight={20} ml={120} backgroundColor={"#81C8FF"}> Study   </Button>
              </View>
              <Text w={205} h={100}>
                Lorem, ipsum dolor sit amet consectetur orem, ipsum dolor sit amet consectetur 
              </Text>
              <Text>
                  Date 19-20-2020
              </Text>
      </Card>

      <Card w={300} h={200} borderRadius={10} mt={5}>
              <View style={{flexDirection : "row"}}>  
                <Text mt={1} bold>Study Golang</Text>
                <Button bold size="sm" marginRight={20} ml={120} backgroundColor={"#81C8FF"}> Study   </Button>
              </View>
              <Text w={205} h={100}>
                Lorem, ipsum dolor sit amet consectetur orem, ipsum dolor sit amet consectetur 
              </Text>
              <Text>
                  Date 19-20-2020
              </Text>
      </Card>

      <Card w={300} h={200} borderRadius={10} mt={5}>
              <View style={{flexDirection : "row"}}>  
                <Text mt={1} bold>Study Golang</Text>
                <Button bold size="sm" marginRight={20} ml={120} backgroundColor={"#81C8FF"}> Study   </Button>
              </View>
              <Text w={205} h={100}>
                Lorem, ipsum dolor sit amet consectetur orem, ipsum dolor sit amet consectetur 
              </Text>
              <Text>
                  Date 19-20-2020
              </Text>
      </Card>

      <Card w={300} h={200} borderRadius={10} mt={5}>
              <View style={{flexDirection : "row"}}>  
                <Text mt={1} bold>Study Golang</Text>
                <Button bold size="sm" marginRight={20} ml={120} backgroundColor={"#81C8FF"}> Study   </Button>
              </View>
              <Text w={205} h={100}>
                Lorem, ipsum dolor sit amet consectetur orem, ipsum dolor sit amet consectetur 
              </Text>
              <Text>
                  Date 19-20-2020
              </Text>
      </Card>
</ScrollView>
    </Box>
  );
}