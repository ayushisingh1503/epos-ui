import { View, Text, TouchableOpacity, Alert, FlatList } from "react-native";
import { ImageContainer } from "../components/userstyle";
import { styles } from "../components/orderliststyle";
import { LinearGradient } from "expo-linear-gradient";
import { GradientBackground } from "../components/userliststyle";
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
      {/* <View style={styles.container}> */}
      <View style={styles.heading}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <LinearGradient colors={["#180564", "#745B93"]} style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.translucentRectangle}>
          <View style={styles.translucentRectangleHeader}>
            <Text style={styles.text}>Order List</Text>
          </View>
          <ScrollView style={styles.scrollview}>
            <FlatList
              data={orderList}
              keyExtractor={(item) => item.ordernumber}
              renderItem={({ item }) => (
                <GradientBackground style={styles.orderRow}>
                  <Text style={styles.label}> Hello</Text>
                  <Text style={styles.ordernumber}>World</Text>
                  <Text style={styles.status}>!</Text>
                </GradientBackground>
              )}
            />
          </ScrollView>
        </View>
      </View>
      {/* </View> */}
    </ImageContainer>
  );
};
