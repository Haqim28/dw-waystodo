import { Box, Button, Card, CheckIcon, FlatList, FormControl, Image, Input, ScrollView, Select, Text, View } from "native-base";
import * as React from "react";
import Profile from '../assets/profile.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from "./config/api";
import axios from 'axios'
import Bulat from "../assets/bulat.png"
import Ceklis from "../assets/ceklis.png"
import { useIsFocused } from "@react-navigation/native";


export default function ListTodo({navigation}) {
  const [data, setData] = React.useState([])
  const isFocused = useIsFocused()

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
        const response = await API.get("/Users",config)       
        setData(response.data)
        console.log(response);
    } catch (error) {
        console.log(error);    
    }
}

//==================================================for List ToDo=====================
const [dataList,setdataList] = React.useState([])

const getListTodo = async() =>{
  try {
      const token = await AsyncStorage.getItem('token');
      const user_id = await AsyncStorage.getItem('user_id');
      
      if (token === null) {
          navigation.navigate("Login")
      }
      const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token
          },
      };
      const response = await API.get(`/Lists?user_id=${user_id}`, config);
      setdataList(response.data)
  } catch (error) {
      console.log(error);
  }
}

React.useEffect(() => {
  if(isFocused){
    getData()
    getListTodo()
  }
},[isFocused])
//===================================================!!!!!!!!!!!!!==================

const [search, setSearch] = React.useState("");
console.log(search);
function handleChange(name,value,) {
  setSearch({
    ...search,
    [name]: value,}
  );
  srcbyName()
};

const srcbyName = async() =>{
  try {
      const token = await AsyncStorage.getItem('token');
      const user_id = await AsyncStorage.getItem('user_id');
      if (token === null) {
          navigation.navigate("Login")
      }
      const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token
          },
      };
      const response = await API.get(`/Listss?name[$contains]=${search}`, config);
      setdataList(response.data)
  } catch (error) {
      console.log(error);
  }
}

const _dataListRender = ({ item })=>{
  return (
            <Card w={300} h={160} borderRadius={15} mt={5} style={{backgroundColor:"#DEFFFF"}} onPress= {navigation.navigate("DetailList")}>
              <View style={{flexDirection : "row"}}>  
                <Text  bold style={{width:200 , height:20}}>{item.name}</Text>
                <Button mt={1} bold style={{height:40, borderRadius:17}}> {item.category}  </Button>
              </View>
              <View style={{flexDirection : "row"}}>  
                    <Text w={200} h={20}  >
                      {item.desc} 
                    </Text>
                    <Image source={Ceklis} alt="status" style={{width:50,height:50,marginLeft:14,marginTop:20}}></Image>
              </View>
              <Text>
                19-20-2020
              </Text>
          </Card>
  );
};
  return (
    <Box bg="white" flex={1} alignItems="center" >
          <View style={{flexDirection : "row"}}>
              <Text bold style={{paddingTop:80,paddingLeft:30,fontSize:30,height:120 ,width:300}}>Hi Radit</Text>
              <Image  source={Profile} style={{width : 50, height:50, marginTop:55,paddingTop:30,borderRadius: 20 }} alt="profile"></Image>
          </View>
          <FormControl w="3/4" maxW="300" isRequired isInvalid>
                <Input minWidth="200" mt={30} h={50} backgroundColor={"#0000001F"} placeholder={"Search List"} fontSize={15} color={"#000"} marginBottom={2}
                value={search.name}
                name="name"
                onChangeText={(value)=>handleChange("name",value)} />
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
          <ScrollView mt={8} h={100}>
            <FlatList
            data={dataList}
            renderItem={_dataListRender}
            keyExtractor={(item) => item}/>
          </ScrollView>
    </Box>
  );
}