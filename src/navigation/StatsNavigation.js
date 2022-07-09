import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

//Style
import { options } from './styles';

//Img
const img =  <Image style={{ width: 100, height: 100, marginBottom: 15 }} source={require("../../assets/img/Logo.png")}/>

//Screens
import Stats from '../components/Screens/Stats/main';

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

const StatsNavigation = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Stats' screenOptions={options}>
        <Stack.Screen name="Stats" component={Stats} options={{ headerTitle: () => <LogoTitle/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default StatsNavigation;