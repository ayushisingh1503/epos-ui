import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../components/menustyle";
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/MenuCategory";
import ItemsScreen from "../screens/MenuItems";

const Tab = createBottomTabNavigator();

const screenOptions = () => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate("")}>
      <LinearGradient
        colors={["#180564", "#745B93"]}
        style={styles.logoutButton}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </LinearGradient>
    </TouchableOpacity>
  ),
});

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.containerFooter}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tabBar}
          >
            <Text
              style={{
                color: isFocused ? "white" : "#222",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const MyTabs = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={screenOptions}
      >
        <Tab.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            headerStyle: {
              backgroundColor: "rgba(211, 130, 225, 0.75)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Tab.Screen
          name="Items"
          component={ItemsScreen}
          options={{
            headerStyle: { backgroundColor: "rgba(211, 130, 225, 0.75)" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
