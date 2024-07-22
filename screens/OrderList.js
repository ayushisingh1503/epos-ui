import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InKitchenOrder from "./inKitchenOrder";
import CompleteOrder from "./completeOrder";
import OpenOrder from "./openOrder";

export default OrderList = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Open" component={OpenOrder} />
        <Tab.Screen name="InKitchen" component={InKitchenOrder} />
        <Tab.Screen name="Complete" component={CompleteOrder} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
