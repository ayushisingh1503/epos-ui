import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../screens/Login';
import User from '../screens/User';
import Menu from '../screens/Menu';

const Stack = createNativeStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyled : {
                    backgroundColor : 'transparent'
                },
                headerTransparent : true,
                headerTitle: '',
            }}>
                <Stack.Screen name = "Login" component ={Login} />
                <Stack.Screen options = {{headerTintColor : 'white'}} name = "User" component = {User} />
                <Stack.Screen options = {{headerTintColor : 'white'}} name = "Menu" component = {Menu} />            
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;

