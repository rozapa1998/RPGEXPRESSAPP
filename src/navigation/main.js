import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";
//Screens
import TabNavigator from './tab';
import AuthNavigator from './Auth';

const Navigation = () => {
  const userId = useSelector(state => state.auth.userId);
    return (
    <NavigationContainer>
      {userId ? <TabNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    )
}

export default Navigation;