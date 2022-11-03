
import * as React from "react";
import { Text, Box } from "native-base";
import FirstPage from './components/FirstPage';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AddCategory from "./components/AddCategory";
import AddList from "./components/AddList";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListTodo from "./components/ListTodo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()





const MyTab = () => {
  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerMode: "screen",
        headerTintColor: "indigo",
        headerStyle: {backgroundColor: "pink"},
        tabBarIcon: ({focused, color, size}) => {
          let iconName
          let colorName = color

          if(route.name === "ListTodo"){
            iconName = focused ? "home" : "home-outline"
            colorName = focused ? "red" : "black"  
            return <Ionicons name={iconName} size={20} color={colorName} />
          }
          else if(route.name === "AddList"){
            iconName = focused ? "list" : "list"
            colorName = focused ? "red" : "black"  
            return <Ionicons name={iconName} size={20} color={colorName} />
          }
          else if(route.name === "AddCategory"){
            iconName = focused ? "apps" : "apps"
            colorName = focused ? "red" : "black"  
            return <Ionicons name={iconName} size={20} color={colorName} />
          }
         

        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "blue"



      })}
      
    >

      <Tab.Screen name="ListTodo" component={ListTodo} options={{
            headerShown: false,
          }}/>
      <Tab.Screen name="AddList" component={AddList} options={{
            headerShown: false,
          }}/>
      <Tab.Screen name="AddCategory" component={AddCategory} options={{
            headerShown: false,
          }}/>
    
    </Tab.Navigator>
  )
}

export default function Container() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={FirstPage}  
            />

        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
          />



          <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{
            headerShown: false,
          }}
          />

          <Stack.Screen
          name="AddCategory"
          component={AddCategory}
          options={{
            headerShown: false,
          }}
          />

          <Stack.Screen
          name="ListTodo"
          component={MyTab}
          options={{
            headerShown: false,
          }}
          />
         
      </Stack.Navigator>
    </NavigationContainer>

  );
}

