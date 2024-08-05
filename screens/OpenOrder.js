import { View, Text, TouchableOpacity } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { styles, ImageContainer } from "../components/openorderstyle";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from "react-native-element-dropdown";
import ModifyOrder from "../Modal/ModifyOrder";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { format } from "date-fns";
import { orderStatuses } from "../helpers/constants";

const OpenOrder = ({ navigation, orderList, value, setValue, setRefresh }) => {
  const data = [
    { label: "Today", value: "today" },
    { label: "Last 1 week", value: "last_7" },
    { label: "Last 1 month", value: "last_30" },
  ];

  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(undefined);

  const refreshComponent = useCallback(() => {
    setRefresh((currentValue) => !currentValue);
  }, [setRefresh]);

  useEffect(() => {
    return () => refreshComponent();
  }, [refreshComponent]);

  const filteredOrders = orderList.filter((order) => order.status === "open");

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const parentScreen = orderStatuses.open;

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {selectedOrder && (
        <ModifyOrder
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
          refreshComponent={refreshComponent}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          parentScreen={parentScreen}
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
                  <Text style={styles.orderAmount}>£{item.amount}</Text>
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
