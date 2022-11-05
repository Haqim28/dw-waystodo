import * as React from "react";
import {
  Text,
  Box,
  Image,
  Button,
  Input,
  Select,
  FormControl,
  CheckIcon,
  TextArea,
} from "native-base";
import LoginIcon from "../assets/loginIcon.png";
import { TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "./config/api";
import axios from "axios";
import Bulat from "../assets/bulat.png"
import Ceklis from "../assets/ceklis.png"

export default function DetailList({navigation}) {
 

  return (
    <Box style={{backgroundColor:"#DEFFFF",margin:30,marginTop:70,borderRadius:30}}flex={1}  >
      <Button bold style={{width:120,height:40, borderRadius:17}} mt={2} ml={190}> study </Button>
            <Text style={{width:200, height:40 ,fontSize:30}} bold ml={10} pt={5}>Study Golang</Text>
            <Image source={Ceklis} alt="status" style={{width:50,height:50,marginLeft:250}}></Image> 
            <Text ml={3}w={300} h={520}p={5}> jhsjhajs </Text>   
            <Text ml={3} p={5}>date</Text>
    </Box>
  );
}
