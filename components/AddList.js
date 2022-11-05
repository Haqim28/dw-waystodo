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

export default function AddList() {
  const [dataCategory, setdataCategory] = React.useState([]);
  const getCategory = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const user_id = await AsyncStorage.getItem("user_id");
      setList({
        user_id,
        status : "pending"
      })
      if (token === null) {
        navigation.navigate("Login");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await API.get(`/Categorys?user_id=${user_id}`, config);
      setdataCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

// //============================For add to table List=============================================
const [list, setList] = React.useState({user_id : null , status : null});
// console.log(list);

function handleChange(name,value) {
  setList({
    ...list,
    [name]: value,
  });
};

const handleSubmit = (async () => {
  try {
            const token = await AsyncStorage.getItem('token');
            
              if (!token) {
                  Navigation.navigate("LoginPage");
              }
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + token
                },
              };
              const response = await axios.post(`https://api.kontenbase.com/query/api/v1/63bf71ed-c215-42ca-bf94-a3137d09dacf/List`, list,config);
              alert(`Selamat  Kategori kamu bertambah`);
              // console.log(list);
  } catch (e) {
    console.log(e);
    console.log("error list nya",list);
    

    console.log("this error ");
    alert("Gagal mendaftar kategori");
  }
});


//==========================================================================
  React.useEffect(() => {
        getCategory();
  }, []);


  return (
    <Box bg="white" flex={1} alignItems="center">
      <Text
        bold
        style={{
          padding: 20,
          paddingTop: 80,
          fontSize: 30,
          height: 120,
          width: 300,
          marginRight: 50,
        }}
      >
        Add List
      </Text>
      <FormControl w="3/4" maxW="300" >
        <Input
          value={list.name}
          name="name"
          onChangeText={(value)=>handleChange("name",value)}
          minWidth="200"
          h={50}
          backgroundColor={"#0000001F"}
          placeholder={"Name"}
          fontSize={15}
          color={"#000"}
          marginBottom={2}
        />

        <FormControl.Label>Choose Category</FormControl.Label>
        <Select
          name="category"
          onValueChange={(value)=>handleChange("category",value)}
          minWidth="200"
          backgroundColor={"#0000001F"}
          accessibilityLabel="Choose Service"
          placeholder="Choose Category"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          {dataCategory?.map((item) => (
            <Select.Item label={item?.name} value={item?.name} />
          ))}
        </Select>

        <Input type={"date"} mt={13} color="gray" 
        value={list.date}
        name="date"
        onChangeText={(value)=>handleChange("date",value)}
        />

        <TextArea
          value={list.desc}
          name="desc"
          onChangeText={(value)=>handleChange("desc",value)}
          aria-label="t1"
          backgroundColor={"#0000001F"}
          marginTop={5}
          height={150}
          numberOfLines={10}
          placeholder="Description"
          isInvalid
          _dark={{
            placeholderTextColor: "gray.300",
          }}
          mb="5"
        />
      </FormControl>

      <TouchableOpacity
      onPress={handleSubmit}
        style={{
          backgroundColor: "#FF5555",
          height: 40,
          width: 310,
          borderRadius: 5,
          justifyContent: "center",
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        <Text
          bold
          style={{
            color: "#FFF",
            fontWeight: "bold",
            borderRadius: 5,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Add List
        </Text>
      </TouchableOpacity>
    </Box>
  );
}
