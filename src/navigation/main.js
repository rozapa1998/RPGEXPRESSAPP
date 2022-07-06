import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

//Style
import { options } from './styles';

//Img
const img =  <Image style={{ width: 100, height: 100, marginBottom: 15 }} source={require("../../assets/img/Logo.png")}/>

//Screens
import StartScreen from '../components/Screens/StartScreen';
import ProfileScreen from '../components/Screens/ProfileScreen';
import FightScreen from '../components/Screens/FightScreen';
import LevelsScreen from '../components/Screens/LevelsScreen';

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

const Navigation = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={options}>
        <Stack.Screen name="Home" component={StartScreen} options={{ headerTitle: () => <LogoTitle/>}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Levels" component={LevelsScreen} />
        <Stack.Screen name="Fight" component={FightScreen} 
        options={({route})=>({
          title: route.params.title,
        })} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation