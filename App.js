import * as React from 'react';
import Navigation from "./src/navigation/main"
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

init()
  .then(()=> {
    console.warn("DB iniciada")
  })
  .catch((err)=>{
    console.warn(err)
  })


export default function App() {
  const [loaded] = useFonts({
    Bokor: require("./assets/fonts/Bokor-Regular.ttf")
  })

  if(!loaded){return <AppLoading/> ;}
  
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
