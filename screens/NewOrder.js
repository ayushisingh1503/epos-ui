import react, { useState, useCallback, useEffect } from "react";
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

export default NewOrder = ({ navigation }) => {
  const [refresh, setRefresh] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryType, setCategoryType] = useState("Kitchen");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [order, setOrder] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [inventoryItemList, setInventoryItemList] = useState([]);

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

  const nanoidNumbers = customAlphabet("1234567890", 5);
  const getFormattedDateTime = () => {
    const currentDate = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = days[currentDate.getDay()];
    const date = ("0" + currentDate.getDate()).slice(-2);
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear().toString().slice(-2);
    const hours = ("0" + currentDate.getHours()).slice(-2);
    const minutes = ("0" + currentDate.getMinutes()).slice(-2);
    const seconds = ("0" + currentDate.getSeconds()).slice(-2);

    return `${day}, ${date}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (!order.order_number) {
      setOrder((currentOrder) => {
        const newOrderNumber = nanoidNumbers();
        return {
          ...order,
          order_number: newOrderNumber,
          status: orderStatuses.open,
          dateTime: getFormattedDateTime(),
        };
      });
    }
  }, [order]);

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

  const create = useCallback(() => {
    //
  }, [order]);

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
                item.item_id === itemId ? item.quantity + 1 : item.quantity,
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
    [order]
  );

  const decrementQuantity = async ({ itemId, quantity }) => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = { itemId, quantity: quantity - 1 };
      // await instance.post(`/neworder/${store_id}`, reqBody);

      setInventoryItemList((prevItems) =>
        prevItems.map((item) =>
          item.item_id === itemId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

  const MenuList = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          source={require("../assets/Screenshot 2024-07-25 041950.png")}
          style={styles.foodImage}
        ></Image>
        <View style={styles.imagedescription}>
          <Text style={styles.itemDetails}>{item.name}</Text>
          <Text style={styles.itemDetails}>$ {item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() =>
              decrementQuantity({
                itemId: item.item_id,
                quantity: item.quantity,
              })
            }
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.decrementGradient}
            >
              <Text style={styles.buttonText}>-</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.itemQuantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              incrementQuantity({
                itemId: item.item_id,
              });
            }}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.incrementGradient}
            >
              <Text style={styles.buttonText}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
                      <MenuList item={item} />
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
            <FlatList
              data={[order]}
              keyExtractor={(item) => item.order_number}
              renderItem={({ item }) => (
                <View style={styles.orderDetails}>
                  {/* <View style={styles.orderDetail1}>
                    <Text style={styles.orderNumber}>
                      Order No: {item.order_number}
                    </Text>
                  </View>
                  <View style={styles.orderDetail3}>
                    <Text style={styles.orderStatus}>
                      Status: {item.status}
                    </Text>
                  </View>
                  <View style={styles.orderDetail4}>
                    <Text style={styles.createdAt}>Date : {item.dateTime}</Text>
                  </View> */}
                </View>
              )}
            />
          </View>
          <View style={styles.rContainerBody}>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={[order]}
                keyExtractor={(item) => item.order_number}
                renderItem={({ item }) => (
                  <View style={styles.orderDetails}>
                    <View style={styles.orderDetail1}>
                      <Text style={styles.orderNumber}>
                        Order No: {item.order_number}
                      </Text>
                    </View>
                    <View style={styles.orderDetail3}>
                      <Text style={styles.orderStatus}>
                        Status: {item.status}
                      </Text>
                    </View>
                    <View style={styles.orderDetail4}>
                      <Text style={styles.createdAt}>
                        Date : {item.dateTime}
                      </Text>
                    </View>
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
            <TouchableOpacity onPress={""}>
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
