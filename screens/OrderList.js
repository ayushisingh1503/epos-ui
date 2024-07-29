import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../components/orderliststyle";
import InKitchenOrder from "./InKitchenOrder";
import CompleteOrder from "./CompleteOrder";
import OpenOrder from "./OpenOrder";

export const OrderList = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Order List</Text>

        <TouchableOpacity onPress={""}>
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
        <Tab.Screen name="Open" component={OpenOrder} />
        <Tab.Screen name="In Kitchen" component={InKitchenOrder} />
        <Tab.Screen name="Complete" component={CompleteOrder} />
      </Tab.Navigator>
    </View>
  );
};
export default OrderList;
