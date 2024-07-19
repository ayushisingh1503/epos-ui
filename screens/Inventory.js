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

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const items = await instance.get(`/menu/item/${store_id}`);
        const inventory = await instance.get(`/inventory/${store_id}`);
        const itemsPayload = items.data.payload;
        const inventoryPayload = inventory.data.payload;
        console.log(itemsPayload);
        console.log(inventoryPayload);
        setItemList(itemsPayload.items);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, []);

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
            searchQuery={undefined}
            setSearchQuery={undefined}
            clicked={undefined}
            setClicked={undefined}
          />
          {/* <List searchQuery={searchQuery} data={List} setClicked={setClicked} /> */}
        </View>
        <View style={styles.body}>
          <View style={styles.translucentRectangle}>
            <View style={styles.translucentRectangleHeader}>
              <Text style={styles.textItem}>Item</Text>
              <Text style={styles.textItemQuantity}>Qunatity</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={itemList}
                keyExtractor={(item) => item.item_id}
                renderItem={({ item }) => (
                  <View style={styles.itemRow}>
                    <Text style={styles.itemName}>{item.name}</Text>
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
