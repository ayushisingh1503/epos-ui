import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../screens/Login';
import User from '../screens/User';
import AddUser from '../screens/AddUser';
import UserList from '../screens/UserList';

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
                <Stack.Screen options = {{headerTintColor : 'white'}} name = "AddUser" component = {AddUser} />  
                <Stack.Screen options = {{headerTintColor : 'white'}} name = "UserList" component = {UserList} />          
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;

