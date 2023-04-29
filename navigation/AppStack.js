import { useEffect } from 'react';
import * as React from 'react';
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ header: () => null }}
            />
        </Stack.Navigator>

    )
}

export default AppStack;