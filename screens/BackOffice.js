import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles, ImageContainer } from "../components/backofficestyle";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-virtualized-view";

export default BackOffice = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const orders = [
    {
      id: "1",
      table: "Order 02",
      header: "#f57c00",
      items: [
        { id: "1", name: "Crispy Squid" },
        { id: "2", name: "Paddron Peppers" },
        { id: "3", name: "Garlic Prawns" },
      ],
    },
    {
      id: "2",
      table: "Order 05",
      items: [
        { id: "4", name: "Garlic Prawns" },
        { id: "5", name: "Crispy Squid" },
        { id: "6", name: "Beef Wellington" },
        { id: "7", name: "Duck breast" },
      ],
    },
    {
      id: "3",
      table: "Order 08",
      items: [
        { id: "8", name: "Prawn Cocktail" },
        { id: "9", name: "Paddron Peppers" },
        { id: "10", name: "Duck breast" },
        { id: "11", name: "Spaghetti Carbonara" },
      ],
    },
    {
      id: "4",
      table: "Order 03",
      items: [
        { id: "12", name: "Fish Stew" },
        { id: "13", name: "Duck breast" },
      ],
    },
    {
      id: "5",
      table: "Order 07",
      items: [
        { id: "14", name: "Dirty Fries" },
        { id: "15", name: "Onion Rings" },
      ],
    },
  ];
  const OrderCard = ({ order }) => {
    const [pressedItems, setPressedItems] = useState({});

    const handleItemPress = (itemId) => {
      setPressedItems((prevState) => ({
        ...prevState,
        [itemId]: !prevState[itemId],
      }));
    };

    return (
      <LinearGradient colors={["#180564", "#745B93"]} style={styles.card}>
        <View style={styles.cardheader}>
          <Text style={styles.orderNo}>{order.table}</Text>
          <View style={styles.cardHeaderIcons}>
            <Icon name="clipboard" size={16} color="#fff" />
            <Text style={styles.orderNo}>....</Text>
            <Icon name="clock-o" size={16} color="#fff" />
            <Text style={styles.orderNo}>....</Text>
            <Icon name="cutlery" size={16} color="#fff" />
            <Text style={styles.orderNo}>....</Text>
            <Icon name="check" size={16} color="#fff" />
          </View>
        </View>
        <View style={styles.itemsList}>
          {order.items.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handleItemPress(item.id)}
              style={() => [
                styles.item,
                {
                  backgroundColor: pressedItems[item.id]
                    ? "#60D95E"
                    : "transparent",
                },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
        <TouchableOpacity style={styles.noteIcon}>
          <Icon name="pencil" size={24} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  const OpenOrder = () => {
    return (
      <ImageContainer source={require("../assets/layout.png")}>
        <View style={styles.cardContainer}>
          <ScrollView>
            <FlatList
              data={orders}
              renderItem={({ item }) => <OrderCard order={item} />}
              keyExtractor={(item) => item.id}
              vertical={true}
              numColumns={5}
            />
          </ScrollView>
        </View>
      </ImageContainer>
    );
  };

  const CompleteOrder = () => {
    return (
      <ImageContainer source={require("../assets/layout.png")}>
        <View style={styles.cardContainer}>
          <ScrollView>
            <FlatList
              data={orders}
              renderItem={({ item }) => <OrderCard order={item} />}
              keyExtractor={(item) => item.id}
              vertical={true}
              numColumns={5}
              // columnWrapperStyle={styles.row}
              // showsVerticalScrollIndicator={true}
            />
          </ScrollView>
        </View>
      </ImageContainer>
    );
  };

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Kitchen</Text>

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
        <Tab.Screen name="Complete" component={CompleteOrder} />
      </Tab.Navigator>
    </View>
  );
};
