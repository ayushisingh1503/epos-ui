import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddItems from "../Modal/AddItems";
import { ImageContainer, styles } from "../components/menucategorystyle";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";

const ItemsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [selectedItem, setSelectedItem] = useState(undefined);

  const refreshComponent = () => {
    setRefresh((currentValue) => !currentValue);
  };

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/menu/item/${store_id}`);
        const payload = response.data.payload;
        setItemList(payload.items);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, [refresh]);

  const deleteItem = async ({ itemId }) => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      await instance.delete(`/menu/${store_id}/item/${itemId}`);

      const filteredCategories = itemList.filter(
        (item) => item.item_id !== itemId
      );
      setItemList(filteredCategories);

      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {modalVisible && (
        <AddItems
          selectedItem={undefined}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setSelectedItem={undefined}
          refreshComponent={refreshComponent}
        />
      )}
      {editModalVisible && selectedItem && (
        <AddItems
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          refreshComponent={refreshComponent}
          editModalVisible={editModalVisible}
          setEditModalVisible={setEditModalVisible}
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
                  <View style={styles.itemRow}>
                    <TouchableOpacity
                      style={styles.itemName}
                      onPress={() => {
                        // console.log("itemlist:", item);
                        setSelectedItem(item);
                        setEditModalVisible(true);
                      }}
                    >
                      <Text style={styles.itemNameText}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.itemCategory}>{item.category}</Text>
                    <Text style={styles.itemPrice}>£{item.price}.00</Text>
                    <Text style={styles.itemTax}>{item.tax_rate}.00</Text>
                    <Icon
                      name="delete"
                      size={30}
                      style={styles.itemIcon}
                      onPress={() => {
                        deleteItem({ itemId: item.item_id });
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
export default ItemsScreen;
