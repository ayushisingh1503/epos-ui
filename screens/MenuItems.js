import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddItems from "../Modal/AddItems";
import { ImageContainer, styles } from "../components/menucategorystyle";

export default ItemsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemList, setitemList] = useState([
    { SNo: "1", itemname: "Fried Rice", price: "$4" },
    { SNo: "2", itemname: "Hakka Noodles", price: "$4" },
    { SNo: "3", itemname: "Samosa Chaat", price: "$4" },
  ]);
  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {modalVisible && (
        <AddItems
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Add New</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.translucentRectangle}>
            <View style={styles.translucentRectangleItemHeader}>
              <Text style={styles.textItem}>Item</Text>
              <Text style={styles.textItemCategory}>Category</Text>
              <Text style={styles.textPrice}>Price</Text>
              <Text style={styles.textTax}>Tax Rate</Text>
              <Text style={styles.textItemAction}>Action</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={itemList}
                keyExtractor={(item) => item.item_id}
                renderItem={({ item }) => (
                  <View style={styles.categoryRow}>
                    <Text style={styles.categoryName}>{item.name}</Text>
                    <Text style={styles.categoryName}>{item.category}</Text>
                    <Text style={styles.categoryName}>{item.price}</Text>
                    <Text style={styles.categoryName}>{item.tax_rate}</Text>
                    <Icon
                      name="delete"
                      size={30}
                      style={styles.icon}
                      onPress={() => {
                        deleteCategory({ userId: item.catgory_id });
                      }}
                    ></Icon>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </ImageContainer>
  );
};
