import {
  extendTheme, NativeBaseProvider
} from "native-base";
import React from "react";
import 'react-native-gesture-handler';
import Container from './Container';
import { QueryClient, QueryClientProvider } from "react-query";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const client = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={client}>
        <NativeBaseProvider>
          <Container/>
        </NativeBaseProvider>
    </QueryClientProvider>
  );
}


