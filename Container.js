
import * as React from "react";
import { Text, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './components/FirstPage';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AddCategory from "./components/AddCategory";


// const Stack = createStackNavigator();


export default function Container() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
        {/* <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: "First Page"
          }}
        /> */}
      {/* </Stack.Navigator> */}
      {/* <FirstPage /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <AddCategory />
    </NavigationContainer>
  );
}