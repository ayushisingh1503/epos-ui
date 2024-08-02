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
import { useEffect } from "react";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import {
  colorStatusMap,
  itemStatuses,
  itemStatusesUI,
} from "../helpers/constants";

const BackOffice = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const [orderList, setOrderList] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const refreshComponent = () => {
    setRefresh((currentValue) => !currentValue);
  };

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/order/${store_id}`, {
          params: { timeSpan: "today" },
        });

        const payload = response.data.payload;
        const orderList = payload.orders.filter(
          (order) => order.status === itemStatuses.inkitchen
        );

        setOrderList(orderList);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, [refresh]);

  const OrderCard = ({ order }) => {
    const handleItemPress = (itemId) => {
      /**
       * 1. Call backend to change item's status - patch /item
       * 2. Update the orderList state with the updated status
       */
    };

    return (
      <LinearGradient colors={["#180564", "#745B93"]} style={styles.card}>
        <View style={styles.cardheader}>
          <Text style={styles.orderNo}>Order No : {order.order_number}</Text>
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
              key={item.menuItem.item_id}
              onPress={() => handleItemPress(item.menuItem.item_id)}
              style={() => [
                styles.item,
                {
                  backgroundColor: colorStatusMap[item.menuItem.status],
                },
              ]}
            >
              <View style={styles.cardItems}>
                <Text style={styles.itemText}>{item.quantity} x </Text>
                <Text style={styles.itemText}>
                  {item.menuItem.name} - {itemStatusesUI[item.menuItem.status]}
                </Text>
                {item.menuItem.status === "complete" && (
                  <Icon name="check" size={16} color="black" />
                )}
                {/* <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.dropdown}
                  zIndex={9999}
                  dropDownContainerStyle={styles.dropdownContainer}
                /> */}
              </View>
            </Pressable>
          ))}
        </View>
        <TouchableOpacity style={styles.noteIcon} onPress={""}>
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
              data={orderList}
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
              data={orderList}
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

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Kitchen</Text>

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
        <Tab.Screen
          name="Open"
          component={OpenOrder}
          refreshComponent={refreshComponent}
        />
        <Tab.Screen
          name="Complete"
          component={CompleteOrder}
          refreshComponent={refreshComponent}
        />
      </Tab.Navigator>
    </View>
  );
};
export default BackOffice;
