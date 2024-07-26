import { View, Text, TouchableOpacity, FlatList } from "react-native";
import react, { useState, useEffect } from "react";
import { styles, ImageContainer } from "../components/openorderstyle";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from "react-native-element-dropdown";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import ModifyOrder from "../Modal/ModifyOrder";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

const OpenOrder = () => {
  const data = [
    { label: "Last 1 week", value: "Last 1 week" },
    { label: "Last 1 month", value: "Last 1 month" },
    { label: "Last 6 months", value: "Last 6 months" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(undefined);

  const refreshComponent = () => {
    setRefresh((currentValue) => !currentValue);
  };

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/order/${store_id}`);
        const payload = response.data.payload;
        const orderList = payload.orders;
        setOrderList(orderList);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, [refresh]);

  const filteredOrders = orderList.filter((order) => order.status == "open");

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  const openModal = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {selectedOrder && (
        <ModifyOrder
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
          refreshComponent={refreshComponent}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <View style={styles.container}>
        <View style={styles.translucentRectangle}>
          <View style={styles.translucentRectangleHeader}>
            <Text style={styles.orderNumber}>Order Number</Text>
            <TouchableOpacity style={styles.orderDateTime}>
              <Dropdown
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                containerStyle={styles.dropdownContainer}
                data={data}
                value={value}
                // search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : "..."}
                searchPlaceholder="Search..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <Text style={[styles.textDateTime, isFocus]}>
                    Date & Time
                  </Text>
                )}
                renderRightIcon={() => (
                  <Icon
                    style={styles.icon}
                    color="white"
                    name="caret-down"
                    size={20}
                  />
                )}
              />
            </TouchableOpacity>
            <Text style={styles.orderNumber}>Amount</Text>
            <Text style={styles.orderNumber}>Staff Name</Text>
          </View>
          <ScrollView style={styles.scrollview}>
            <KeyboardAwareFlatList
              data={filteredOrders}
              keyExtractor={(item) => item.order_id}
              renderItem={({ item }) => (
                <View style={styles.orderRow}>
                  <TouchableOpacity
                    onPress={() => {
                      openModal(item);
                    }}
                  >
                    <Text style={styles.orderNum}>{item.order_number}</Text>
                  </TouchableOpacity>
                  <Text style={styles.orderDate}>
                    {convertTimestampToDate(item.created_at_index)}
                  </Text>
                  <Text style={styles.orderAmount}>${item.amount}</Text>
                  <Text style={styles.orderStaff}>{item.staff_name}</Text>
                </View>
              )}
            />
          </ScrollView>
        </View>
      </View>
    </ImageContainer>
  );
};

export default OpenOrder;
