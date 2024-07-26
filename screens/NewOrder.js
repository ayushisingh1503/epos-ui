import react, { useState, useRef, useEffect } from "react";
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
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-virtualized-view";
import { LinearGradient } from "expo-linear-gradient";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { nanoid } from "nanoid";
import { orderStatuses } from "../helpers/constants";

const menuList = [
  { id: "1", name: "Rice", price: "$4.00" },
  { id: "2", name: "Ice Tea", price: "$4.00" },
  { id: "3", name: "Ice Cream", price: "$4.00" },
  { id: "4", name: "Rice", price: "$4.00" },
  { id: "5", name: "Ice Tea", price: "$4.00" },
  { id: "6", name: "Ice Cream", price: "$4.00" },
  { id: "7", name: "Rice", price: "$4.00" },
];
export default NewOrder = ({ navigation }) => {
  const [refresh, setRefresh] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryType, setCategoryType] = useState("Kitchen");
  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState({});

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
    if (!order.order_number) {
      setOrder((currentOrder) => {
        return {
          ...order,
          order_number: nanoid(5),
          status: orderStatuses.open,
        };
      });
    }
  }, []);

  const MenuCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          source={require("../assets/Screenshot 2024-07-25 041950.png")}
          style={styles.foodImage}
        ></Image>
        <Text style={styles.itemDetails}>{item.name}</Text>
        <Text style={styles.itemDetails}> {item.price}</Text>
      </View>
    );
  };
  const Categories = ({ item }) => {
    return <Text style={styles.categoryList}>{item.name}</Text>;
  };

  return (
    <ImageContainer source={require("../assets/layout.png")}>
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
                  renderItem={({ item }) => <Categories item={item} />}
                />
              </ScrollView>
            </View>
            <View style={styles.centerPanel}>
              <ScrollView style={styles.scrollview}>
                <FlatList
                  data={menuList}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <MenuCard item={item} />}
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
            <View style={styles.orderDetails}>
              <View style={styles.orderDetail1}>
                <Text style={styles.orderNumber}> Order No: {" 23 "}</Text>
              </View>
              {/* <View style={styles.orderDetail2}>
                <Text style={styles.tableNo}> Table No: {1} </Text>
              </View> */}
              <View style={styles.orderDetail3}>
                <Text style={styles.orderStatus}> Status: {"Open"}</Text>
              </View>
              <View style={styles.orderDetail4}>
                <Text style={styles.createdAt}> Date: {"23 Jul 2024"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rContainerBody}>
            <ScrollView style={styles.scrollview}>
              <FlatList data={""} keyExtractor={""} renderItem={""} />
            </ScrollView>
            <TouchableOpacity onPress={""}>
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
