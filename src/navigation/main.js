import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import TabNavigator from './tab';
import AuthNavigator from './Auth';

const Navigation = () => {
  const [user, setUser] = useState(null);
    return (
    <NavigationContainer>
      {user ? <TabNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    )
}

export default Navigation;