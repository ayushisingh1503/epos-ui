import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "../screens/Login";
import Admin from "../screens/Admin";
import AddUser from "../Modal/AddUser";
import UserList from "../screens/UserList";
import Inventory from "../screens/Inventory";
import OrderList from "../screens/OrderList";
import NewOrder from "../screens/NewOrder";

const Stack = createNativeStackNavigator();
const RootStack = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const [credsResult, userResult] = await AsyncStorage.multiGet([
        "credentials",
        "user",
      ]);

      if (credsResult[1] && userResult[1]) {
        console.log(credsResult, userResult);
        setLoggedIn(true);
      }
      // console.log(res.data.message);
    })();

    return () => {};
  }, []);

  const pages = (
    <>
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
      <Stack.Screen
        options={{ headerTintColor: "white" }}
        name="OrderList"
        component={OrderList}
      />
      <Stack.Screen
        options={{ headerTintColor: "white" }}
        name="NewOrder"
        component={NewOrder}
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
    </>
  );

  return (
    <NavigationContainer>
      {!isLoggedIn && (
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
            name="Admin"
            component={Admin}
          />
          {pages}
        </Stack.Navigator>
      )}
      {isLoggedIn && (
        <Stack.Navigator
          screenOptions={{
            headerStyled: {
              backgroundColor: "transparent",
            },
            headerTransparent: true,
            headerTitle: "",
          }}
        >
          <Stack.Screen
            options={{ headerTintColor: "white" }}
            name="Admin"
            component={Admin}
          />
          <Stack.Screen name="Login" component={Login} />
          {pages}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default RootStack;
