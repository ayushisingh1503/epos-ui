import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import User from "../screens/User";
import AddUser from "../Modal/AddUser";
import UserList from "../screens/UserList";
import Menu from "../screens/Menu";
import Inventory from "../screens/Inventory";

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyled: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitle: "",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{ headerTintColor: "white" }}
          name="User"
          component={User}
        />
        <Stack.Screen
          options={{ headerTintColor: "white" }}
          name="AddUser"
          component={AddUser}
        />
        <Stack.Screen
          options={{ headerTintColor: "white" }}
          name="UserList"
          component={UserList}
        />
        {/* <Stack.Screen
          options={{ headerTintColor: "white" }}
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          options={{ headerTintColor: "white" }}
          name="Inventory"
          component={Inventory}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
