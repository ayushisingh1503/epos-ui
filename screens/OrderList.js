import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../components/orderliststyle";
import InKitchenOrder from "./InKitchenOrder";
import { axiosWrapper } from "../helpers/axiosWrapper";
import CompleteOrder from "./CompleteOrder";
import OpenOrder from "./OpenOrder";
import { showToast } from "../helpers/toastMessage";

export const OrderList = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const [orderList, setOrderList] = useState([]);
  const [value, setValue] = useState("today");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/order/${store_id}`, {
          params: { timeSpan: value },
        });
        const payload = response.data.payload;
        const orderList = payload.orders;
        setOrderList(orderList);
      } catch (err) {
        showToast("error", err.response?.data?.message);
        console.error("User fetch error", err);
      }
    })();
  }, [refresh, value]);

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Order List</Text>

        <TouchableOpacity onPress={logout}>
          <LinearGradient
            colors={["#180564", "#745B93"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen name="Open">
          {() => (
            <OpenOrder
              value={value}
              setValue={setValue}
              orderList={orderList}
              setRefresh={setRefresh}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="In Kitchen">
          {() => (
            <InKitchenOrder
              value={value}
              setValue={setValue}
              orderList={orderList}
              setRefresh={setRefresh}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Complete">
          {() => (
            <CompleteOrder
              value={value}
              setValue={setValue}
              orderList={orderList}
              setRefresh={setRefresh}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};
export default OrderList;
