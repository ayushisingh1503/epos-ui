import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "../screens/Login";
import Admin from "../screens/Admin";
import UserList from "../screens/UserList";
import Inventory from "../screens/Inventory";
import OrderList from "../screens/OrderList";
import NewOrder from "../screens/NewOrder";
import MenuLayout from "../screens/MenuLayout";
import BackOffice from "../screens/BackOffice";
import { showToast } from "../helpers/toastMessage";
import { MessagesContext } from "../helpers/context";

import Scaledrone from "scaledrone-react-native";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();
// export const MessagesContext = createContext([]);

const RootStack = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const [credsResult, userResult] = await AsyncStorage.multiGet([
        "credentials",
        "user",
      ]);

      if (credsResult[1] && userResult[1]) {
        setLoggedIn(true);
      }
    })();

    return () => {};
  }, []);

  useEffect(() => {
    const drone = new Scaledrone("RL2K2yWcs2oqnVgV");
    const room = drone.subscribe("epos_statuses");

    room.on("message", (message) => {
      setMessages((currentMessages) => [...currentMessages, message?.data]);
      showToast("success", message.data);
    });

    return () => room.unsubscribe();
  }, []);

  const pages = (
    <>
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
      <Stack.Screen
        options={{ headerTintColor: "white" }}
        name="MenuLayout"
        component={MenuLayout}
      />
      <Stack.Screen
        options={{ headerTintColor: "white" }}
        name="Inventory"
        component={Inventory}
      />
      <Stack.Screen
        options={{ headerTintColor: "white" }}
        name="BackOffice"
        component={BackOffice}
      />
    </>
  );

  return (
    <NavigationContainer>
      <MessagesContext.Provider value={messages}>
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
      </MessagesContext.Provider>
      <Toast />
    </NavigationContainer>
  );
};
export default RootStack;
