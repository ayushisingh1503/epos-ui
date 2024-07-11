import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../components/menustyle";
import { LinearGradient } from "expo-linear-gradient";
import { ImageContainer } from "../components/adminstyle";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CategoryScreen = () => {
  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.screen}>
        <TouchableOpacity style={styles.addButton}>
          <LinearGradient
            colors={["#180564", "#745B93"]}
            style={styles.linearGradient}
          >
            <Text style={styles.addButtonText}>Add New</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Category Name</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>Starter</Text>
          </View>
        </View>
      </View>
    </ImageContainer>
  );
};

const ItemsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Items Screen</Text>
    </View>
  );
};

// const handleLogout = () => {
//   console.log("Logged out");
// };

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
    // <Button onPress={handleLogout} title="Logout" style={styles.logout} />
  ),
});

function MyTabBar({ state, descriptors, navigation }) {
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
            key={route.key} // Add a unique key to each TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
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
}

const Tab = createBottomTabNavigator();

function MyTabs() {
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
            headerStyle: { backgroundColor: "rgba(211, 130, 225, 0.75)" }, // Change header color here
            headerTintColor: "#fff", // Change header text color here
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Tab.Screen
          name="Items"
          component={ItemsScreen}
          options={{
            headerStyle: { backgroundColor: "rgba(211, 130, 225, 0.75)" }, // Change header color here
            headerTintColor: "#fff", // Change header text color here
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
