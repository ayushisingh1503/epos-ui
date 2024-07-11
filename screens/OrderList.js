import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  Pressable,
} from "react-native";
import { ImageContainer } from "../components/adminstyle";
import { GradientBackground, styles } from "../components/orderliststyle";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-virtualized-view";
import React, { useState } from "react";

export default OrderList = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert("LogOut");
  };

  const [orderList, setOrderList] = useState([
    { label: "order no", ordernumber: "1", status: "Open" },
    { label: "order no", ordernumber: "2", status: "Closed" },
    { label: "order no", ordernumber: "3", status: "Billed" },
    { label: "order no", ordernumber: "4", status: "Billed" },
  ]);

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Order List</Text>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.logoutButton}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.translucentRectangle}>
          <View style={styles.translucentRectangleHeader}>
            <Text style={styles.orderNumber}>Order Number</Text>
            <Text style={styles.status}>Stauts</Text>
          </View>
          <ScrollView style={styles.scrollview}>
            <FlatList
              data={orderList}
              keyExtractor={(item) => item.ordernumber}
              renderItem={({ item }) => (
                <GradientBackground style={styles.orderRow}>
                  <Text style={styles.order}>
                    {item.label} {item.ordernumber}
                  </Text>
                  <Pressable
                    onPress={() => {
                      Alert.alert("pressed");
                    }}
                  >
                    <Text style={styles.orderStatus}>{item.status}</Text>
                  </Pressable>
                </GradientBackground>
              )}
            />
          </ScrollView>
        </View>
      </View>
    </ImageContainer>
  );
};
