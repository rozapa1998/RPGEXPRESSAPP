import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Style
import { options } from './styles';

//Screens
import StartScreen from '../components/Screens/StartScreen';
import ProfileScreen from '../components/Screens/ProfileScreen';
import FightScreen from '../components/Screens/FightScreen';
import LevelsScreen from '../components/Screens/LevelsScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio' screenOptions={options}>
        <Stack.Screen name="Inicio" component={StartScreen}  />
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