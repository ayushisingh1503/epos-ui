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
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState("");

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

  const orderData = order.order_number ? [order] : [];

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
            <FlatList
              data={orderData}
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
                    <Text style={styles.createdAt}>Date : {item.dateTime}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles.rContainerBody}>
            <ScrollView style={styles.scrollview}>
              <FlatList data={""} keyExtractor={""} renderItem={""} />
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
            <Modal
              animationType="none"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add Note</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your note here"
                  value={note}
                  onChangeText={setNote}
                />
                <View style={styles.noteButton}>
                  <TouchableOpacity onPress={""}>
                    <LinearGradient
                      colors={["#180564", "#745B93"]}
                      style={styles.linearGradient}
                    >
                      <Text style={styles.buttonText}>Save Note</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <LinearGradient
                      colors={["#180564", "#745B93"]}
                      style={styles.linearGradient}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
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
