import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from 'styled-components';
import SignInScreen from '../screens/SignInScreen/SignInScreen';

const Stack = createNativeStackNavigator();

export function AuthStack() {
    const { colors } = useTheme();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.onBackground,
                headerStyle: {
                    backgroundColor: colors.backgroundSecondary,
                },
            }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
    );
}