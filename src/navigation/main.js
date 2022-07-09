import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import TabNavigator from './tab';

const Navigation = () => {
    return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    )
}

export default Navigation