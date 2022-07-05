import * as React from 'react';
import Navigation from "./src/navigation/main"
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    Bokor: require("./assets/fonts/Bokor-Regular.ttf")
  })

  if(!loaded){return <AppLoading/> ;}
  
  return (
    <Navigation/>
  );
}
