import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

//Style
import { stylesNavigation } from './stylesNavigation';

//Screens
import StartScreen from '../components/Screens/StartScreen';
import ShopScreen from '../components/Screens/ShopScreen';
import FightScreen from '../components/Screens/FightScreen';
import LevelsScreen from '../components/Screens/LevelsScreen';
import RegisterScreen from "../components/Screens/RegisterScreen";

const Stack = createNativeStackNavigator();

//Component
function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require('../../assets/img/Logo.png')}
    />
  );
}

const ScreenNavigation = () => {
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={stylesNavigation}>
        <Stack.Screen name="Home" component={StartScreen} options={{ headerTitle: () => <LogoTitle/>}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Levels" component={LevelsScreen} />
        <Stack.Screen name="Fight" component={FightScreen} 
        options={({route})=>({
          title: route.params.title,
        })} />
      </Stack.Navigator>
    )
}

export default ScreenNavigation;