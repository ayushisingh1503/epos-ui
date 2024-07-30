import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { styles, ImageContainer } from "../components/completeorderstyle";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from "react-native-element-dropdown";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import ModifyOrder from "../Modal/ModifyOrder";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { format } from "date-fns";
import { orderStatuses } from "../helpers/constants";

const CompleteOrder = ({ navigation }) => {
  const [value, setValue] = useState("today");
  const [isFocus, setIsFocus] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(undefined);

  const data = [
    { label: "Today", value: "today" },
    { label: "Last 1 week", value: "last_7" },
    { label: "Last 1 month", value: "last_30" },
  ];

  const refreshComponent = () => {
    setRefresh((currentValue) => !currentValue);
  };

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/order/${store_id}`, {
          params: { timeSpan: value },
        });
        const payload = response.data.payload;
        const orderList = payload.orders;
        setOrderList(orderList);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, [refresh, value]);

  const filteredOrders = orderList.filter(
    (order) => order.status === "complete"
  );

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
          parentScreen={orderStatuses.complete}
          navigation={navigation}
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
                    {format(item.created_at, "EEEE, yyyy-MM-dd HH:mm:ss")}
                  </Text>
                  <Text style={styles.orderAmount}>£{item.amount}.00</Text>
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

export default CompleteOrder;
