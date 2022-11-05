
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Box, FlatList, Text, View } from "native-base";
import * as React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { API } from "./config/api";

export default function AddCategory() {
  
  const [category, setCategory] = React.useState({user_id : null});
  const [dataCategory,setdataCategory] = React.useState([])
  console.log(category);

  function handleChange(name,value) {
    setCategory({
      ...category,
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
                const response = await axios.post("https://api.kontenbase.com/query/api/v1/63bf71ed-c215-42ca-bf94-a3137d09dacf/Category", category,config);
                alert(`Selamat  Kategori kamu bertambah`);
                getCategory()
                console.log(category);
    } catch (e) {
      console.log(e);
      console.log("this error ");
      alert("Gagal mendaftar kategori");
    }
  });
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

const _dataCategoryRender = ({ item })=>{
  return (
          <View style={{margin:20,backgroundColor:"red" , color : "white"}}>
          <Text bold style={{color:"white"}}>
          {item.name}</Text>
          </View>
  );
};

  return (
    <Box bg="white" flex={1} alignItems="center" >
   
    <Text bold style={{padding:20,paddingTop:80,fontSize:30,height:120 ,width:300,marginRight:50}}>Add Category</Text>
  
      <TextInput 
      placeholder="Name" 
      value={category.name}
      name="name"
      onChangeText={(value)=>handleChange("name",value)}
      style={{backgroundColor: '#0000001F', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 10 , padding: 10}}/>

        <TouchableOpacity onPress={handleSubmit}
        style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center' , marginTop: 30, marginBottom:10}}>
            <Text bold style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center' ,fontSize:20}}>Add Category</Text>
        </TouchableOpacity>

        <Text bold style={{padding:20,paddingTop:80,fontSize:30,height:120 ,width:300,marginRight:50}}>List Category</Text>
        
      
    <Text style={{marginTop: 20,  marginRight:100}}>
    
                    <FlatList
                        numColumns={3}
                        data={dataCategory}
                        renderItem={_dataCategoryRender}
                        keyExtractor={(item) => item}
                    />
    </Text>


    
        

    </Box>
  );
}