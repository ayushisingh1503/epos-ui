import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../components/menustyle";
import { LinearGradient } from "expo-linear-gradient";
import CategoryScreen from "./MenuCategory";
import ItemsScreen from "./MenuItems";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const logout = async () => {
  await AsyncStorage.clear();
  navigation.navigate("Login");
};

const screenOptions = () => ({
  headerRight: () => (
    <TouchableOpacity onPress={logout}>
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

const MenuLayout = () => {
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
            headerTitleStyle: {
              paddingLeft: 50,
              fontWeight: 700,
            },
            headerStatusBarHeight: 25,
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Items"
          component={ItemsScreen}
          options={{
            headerStyle: { backgroundColor: "rgba(211, 130, 225, 0.75)" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              paddingLeft: 50,
              fontWeight: 700,
            },
            headerStatusBarHeight: 30,
            headerTitleAlign: "center",
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MenuLayout;
