import { ImageContainer, styles } from "../components/inventorystyle";
import react, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../helpers/searchBar";
import List from "../helpers/filter";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { ScrollView } from "react-native-virtualized-view";

export default Inventory = () => {
  const [searchQuery, setSearchQuery] = useState(false);
  const [clicked, setClicked] = useState("");
  const [itemList, setItemList] = useState();
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const items = await instance.get(`/menu/item/${store_id}`);
        const inventory = await instance.get(`/inventory/${store_id}`);
        const itemsPayload = items.data.payload;
        const inventoryPayload = inventory.data.payload;
        const list = itemsPayload.items
          .filter((i) =>
            inventoryPayload.items.some((iItem) => i.item_id === iItem.item_id)
          )
          .map((item) => {
            const inventoryItem = inventoryPayload.items.find(
              (i) => i.item_id === item.item_id
            );
            return {
              ...item,
              quantity: inventoryItem?.quantity ?? 0,
            };
          });
        setItemList(list);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, []);

  const incrementQuantity = async ({ itemId, quantity }) => {
    try {
      // setDisableButton(true);
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = { itemId, quantity };
      await instance.patch(`/inventory/${store_id}`, reqBody);

      // to check the immediate value of the state
      setItemList(
        itemList.map((item) =>
          item.item_id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      // setDisableButton(false);
      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
      // setDisableButton(true);
    }
  };
  const decrementQuantity = async ({ itemId, quantity }) => {
    try {
      // setDisableButton(true);
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = { itemId, quantity };
      await instance.patch(`/inventory/${store_id}`, reqBody);

      setItemList((prevItems) =>
        prevItems.map((item) =>
          item.item_id === itemId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
      // setDisableButton(true);
    }
  };

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Inventory</Text>
          <TouchableOpacity onPress={""}>
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            clicked={clicked}
            setClicked={setClicked}
          />
          {/* <List searchQuery={searchQuery} data={List} setClicked={setClicked} /> */}
        </View>
        <View style={styles.body}>
          <View style={styles.translucentRectangle}>
            <View style={styles.translucentRectangleHeader}>
              <Text style={styles.textItem}>Item</Text>
              <Text style={styles.textItemQuantity}>Quantity</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={itemList}
                keyExtractor={(item) => item.item_id}
                renderItem={({ item }) => (
                  <View style={styles.itemRow}>
                    <View style={styles.itemName}>
                      <Text>{item.name}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          decrementQuantity({
                            itemId: item.item_id,
                            quantity: item.quantity,
                          })
                        }
                        // disabled={disableButton}
                      >
                        <Text style={styles.buttonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.itemQuantity}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          incrementQuantity({
                            itemId: item.item_id,
                            quantity: item.quantity,
                          })
                        }
                        // disabled={disableButton}
                      >
                        <Text style={styles.buttonText}>+</Text>
                      </TouchableOpacity>
                    </View>
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
