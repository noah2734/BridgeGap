import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './(screens)/HomeScreen';
import TellerConnectScreen from './(screens)/TellerConnectScreen';



const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TellerConnect" component={TellerConnectScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;