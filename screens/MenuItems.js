import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../components/menustyle";
import { LinearGradient } from "expo-linear-gradient";
import { ImageContainer } from "../components/adminstyle";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddItems from "../Modal/AddItems";

export default ItemsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemList, setitemList] = useState([
    { SNo: "1", itemname: "Fried Rice", price: "$4" },
    { SNo: "2", itemname: "Hakka Noodles", price: "$4" },
    { SNo: "3", itemname: "Samosa Chaat", price: "$4" },
  ]);
  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <LinearGradient
            colors={["#180564", "#745B93"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Add New</Text>
          </LinearGradient>
        </TouchableOpacity>
        {modalVisible && (
          <AddItems
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
        <View style={styles.translucentRectangle}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>S.No</Text>
            <Text style={styles.tableHeaderText}>Item</Text>
            <Text style={styles.tableHeaderText}>Price</Text>
            <Text style={styles.tableHeaderText}>Action</Text>
          </View>
          <ScrollView style={styles.scrollview}>
            <FlatList>
              data={itemList}
              keyExtractor={(item) => item.itemname}
              renderItem=
              {({ item }) => (
                <GradientBackground style={styles.tableRow}>
                  <Text style={styles.tableCell}>{item.SNo}</Text>
                  <Text style={styles.tableCell}>{item.itemname}</Text>
                  <Text style={styles.tableCell}>{item.price}</Text>
                  <Icon
                    name="delete"
                    size={30}
                    color="white"
                    style={styles.icon}
                    onPress={() => alert("Delete this user")}
                  ></Icon>
                </GradientBackground>
              )}
            </FlatList>
          </ScrollView>
        </View>
      </View>
    </ImageContainer>
  );
};
