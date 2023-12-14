import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '../context/Auth';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

const Router = () => {
  const { authData } = useAuth()
  return (
    <NavigationContainer>
      {authData ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  )
};

export default Router;
