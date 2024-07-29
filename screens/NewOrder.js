import { useState, useCallback, useEffect } from "react";
import "react-native-get-random-values";
import {
  GradientBackground,
  ImageContainer,
  styles,
} from "../components/neworderstyle";
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { LinearGradient } from "expo-linear-gradient";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { customAlphabet } from "nanoid";
import { orderStatuses } from "../helpers/constants";
import AddNote from "../Modal/AddNote";
import { MenuList } from "./MenuList";
import { format, date } from "date-fns";

export const NewOrder = ({ navigation }) => {
  const [refresh, setRefresh] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryType, setCategoryType] = useState("Kitchen");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [order, setOrder] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [inventoryItemList, setInventoryItemList] = useState([]);
  const [message, setMessage] = useState("");

  const refreshComponent = () => {
    setRefresh((currentValue) => !currentValue);
  };

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/menu/category/${store_id}`);
        const payload = response.data.payload;
        const categories = payload.categories;
        const filteredCategories = categories.filter(
          (category) => category.type === categoryType
        );
        setCategoryList(filteredCategories);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, [refresh, categoryType]);

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const [items, inventory] = await Promise.all([
          instance.get(`/menu/item/${store_id}`),
          instance.get(`/inventory/${store_id}`),
        ]);

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
              // quantity: inventoryItem?.quantity ?? 0,
            };
          });
        const filteredList = list.filter(
          (item) => item.category === selectedCategory
        );
        setInventoryItemList(filteredList);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, [refresh, selectedCategory]);

  const nanoidNumbers = customAlphabet("1234567890", 5);

  useEffect(() => {
    if (!order.order_number) {
      setOrder((currentOrder) => {
        const newOrderNumber = nanoidNumbers();
        return {
          ...order,
          order_number: newOrderNumber,
          status: orderStatuses.open,
          // dateTime: format(new date(), "EEEE, yyyy-MM-dd HH:mm:ss"),
        };
      });
    }
  }, [nanoidNumbers, order]);

  const incrementQuantity = useCallback(
    async ({ itemId }) => {
      try {
        //@todo: show success toast message
        /**
         * Check if order already has items.
         * Then we want to find the item with the correct itemId from inventory.
         * If item is not already there in the order, we add it.
         * If it is already there, we increment it.
         */
        const currentItemInOrder = order.items?.some(
          (item) => item.menuItem?.item_id === itemId
        );
        const currentItemInInventory = inventoryItemList.find(
          (item) => item.item_id === itemId
        );

        if (!currentItemInInventory) {
          //show toast message
          return;
        }

        if (!currentItemInOrder) {
          const orderItems = [
            ...(order.items ?? []),
            {
              menuItem: {
                category: currentItemInInventory.category,
                item_id: currentItemInInventory.item_id,
                name: currentItemInInventory.name,
                price: currentItemInInventory.price,
                tax_rate: currentItemInInventory.tax_rate,
              },
              quantity: 1,
            },
          ];
          setOrder((currentOrder) => {
            return {
              ...currentOrder,
              items: orderItems,
            };
          });
        } else {
          const orderItems = order.items.map((item) => {
            return {
              ...item,
              quantity:
                item.menuItem.item_id === itemId
                  ? item.quantity + 1
                  : item.quantity,
            };
            // is the same as
            // if (item.item_id === itemId) {
            //   return {
            //     ...item,
            //     quantity: item.quantity + 1
            //   }
            // } else {
            //   return item;
            // }
          });

          setOrder((currentOrder) => {
            return {
              ...currentOrder,
              items: orderItems,
            };
          });
        }
      } catch (err) {
        //@todo: show toast message
        console.log("Error", err);
      }
    },
    [inventoryItemList, order.items]
  );

  const decrementQuantity = useCallback(
    async ({ itemId }) => {
      try {
        const currentItemInOrder = order.items?.some(
          (item) => item.menuItem?.item_id === itemId
        );

        const currentItemInInventory = inventoryItemList.find(
          (item) => item.item_id === itemId
        );

        if (!currentItemInInventory) {
          //show toast message
          return;
        }

        if (!currentItemInOrder) {
          const orderItems = [
            ...(order.items ?? []),
            {
              menuItem: {
                category: currentItemInInventory.category,
                item_id: currentItemInInventory.item_id,
                name: currentItemInInventory.name,
                price: currentItemInInventory.price,
                tax_rate: currentItemInInventory.tax_rate,
              },
              quantity: 1,
            },
          ];
          setOrder((currentOrder) => {
            return {
              ...currentOrder,
              items: orderItems,
            };
          });
        } else {
          const orderItems = order.items.map((item) => {
            return {
              ...item,
              quantity:
                item.menuItem.item_id === itemId
                  ? item.quantity - 1
                  : item.quantity,
            };
          });

          setOrder((currentOrder) => {
            return {
              ...currentOrder,
              items: orderItems,
            };
          });
        }
      } catch (err) {
        //@todo: show toast message
        console.log("Error", err);
      }
    },
    [inventoryItemList, order.items]
  );

  const createOrder = useCallback(async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id, name } = await getLoggedInUser();
      const reqBody = {
        items: order.items,
        order_number: order.order_number,
        staff_name: name,
      };
      await instance.post(`/order/${store_id}`, reqBody);
      refreshComponent();
      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  }, [order]);

  const Categories = ({ item }) => {
    return <Text style={styles.categoryList}>{item.name}</Text>;
  };

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {modalVisible && (
        <AddNote
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <StatusBar animated={true} backgroundColor="rgba(211, 130, 225, 0.75)" />
      <View style={styles.container}>
        <GradientBackground>
          <View style={styles.leftContainer}>
            <View style={styles.leftSidePanel1}>
              <Pressable
                style={styles.foodIcon}
                onPress={() => setCategoryType("Kitchen")}
              >
                <Image
                  source={require("../assets/Dinner.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>Kitchen Order</Text>
              </Pressable>
              <Pressable
                style={styles.barIcon}
                onPress={() => setCategoryType("Bar")}
              >
                <Image
                  source={require("../assets/Cocktail.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>Bar Order</Text>
              </Pressable>
              <Pressable style={styles.messageIcon}>
                <Image
                  source={require("../assets/Letter.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>Message</Text>
              </Pressable>
              <Pressable style={styles.logoutIcon}>
                <Image
                  source={require("../assets/Sports Mode.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>LogOut</Text>
              </Pressable>
            </View>

            <View style={styles.leftSidePanel2}>
              <ScrollView style={styles.scrollview}>
                <FlatList
                  data={categoryList}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => setSelectedCategory(item.name)}
                    >
                      <Categories item={item} />
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
            </View>
            <View style={styles.centerPanel}>
              <ScrollView style={styles.scrollview}>
                <FlatList
                  data={inventoryItemList}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View>
                      <MenuList
                        item={item}
                        order={order}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                      />
                    </View>
                  )}
                  vertical={true}
                  numColumns={4}
                />
              </ScrollView>
            </View>
          </View>
        </GradientBackground>

        <View style={styles.rightContainer}>
          <View style={styles.rContainerHeader}>
            <View style={styles.rContainerHeaderImage}>
              <Image source={require("../assets/User..png")} />
              <Text style={styles.rContainerHeaderText}> Hi User,</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.orderNumber}>
                Order Number : {order.order_number}
              </Text>
              <Text style={styles.orderNumber}>
                Order Status : {order.status}
              </Text>
            </View>
          </View>
          <View style={styles.rContainerBody}>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={[order]}
                keyExtractor={(item) => item.order_number}
                renderItem={({ item }) => (
                  <View style={styles.orderDetails}>
                    {item.items?.map((orderItem, index) => {
                      return (
                        <View key={index} style={styles.orderItemRow}>
                          <View>
                            <Text>
                              {orderItem.quantity} x {orderItem.menuItem.name}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.orderItemText}>
                              $ {orderItem.menuItem.price}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                )}
              />
            </ScrollView>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.notesLinearGradient}
              >
                <Image
                  source={require("../assets/Create.png")}
                  style={styles.image}
                ></Image>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.rContainerFooter}>
            <TouchableOpacity onPress={createOrder}>
              <LinearGradient
                colors={["#0B7415", "#60D95E"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Place Order</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={""}>
              <LinearGradient
                colors={["#E93C3C", "#832222"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Clear Basket</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageContainer>
  );
};

export default NewOrder;
