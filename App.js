import * as React from 'react';
import Navigation from "./src/navigation/main"
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from './src/store';

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
