import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Router = () => {
  const auth = true;
  return (
    <NavigationContainer>
      {auth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
};

export default Router;
