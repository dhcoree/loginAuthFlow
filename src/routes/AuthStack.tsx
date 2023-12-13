import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;