import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, LogBox } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../components/modifyorderstyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";

export default ModifyOrder = ({
  refreshComponent,
  selectedOrder,
  setSelectedOrder,
  setModalVisible,
  modalVisible,
}) => {
  useEffect(() => {
    (async () => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    })();
  }, []);

  const updateOrder = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();

      await instance.post(`/order/${store_id}/${order_id}`, orderReq);
      setSelectedOrder(undefined);
      setModalVisible(!modalVisible);
      refreshComponent();
      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

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

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <LinearGradient
        colors={["#745B93", "#180564"]}
        style={styles.itemModalOverlay}
      >
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.modalHeader}>
            <View style={styles.modalHeaderText}>
              <Text style={styles.orderNumber}>Order Number</Text>
              <Text style={styles.orderDateTime}>Date & Time</Text>
              <Text style={styles.orderNumber}>Amount</Text>
              <Text style={styles.orderNumber}>Staff Name</Text>
            </View>
            <View style={styles.orderRow}>
              <Text style={styles.orderNum}>{selectedOrder.order_number}</Text>
              <Text style={styles.orderDate}>
                {convertTimestampToDate(selectedOrder.created_at_index)}
              </Text>
              <Text style={styles.orderAmount}>${selectedOrder.amount}</Text>
              <Text style={styles.orderStaff}>{selectedOrder.staff_name}</Text>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.orderItems}>
              <View style={styles.translucentBody}>
                <Text style={styles.listHead}>ITEMS: </Text>
                <View style={styles.itemLists}>
                  {selectedOrder.items.map((item, index) => (
                    <View key={index} style={styles.menuText}>
                      <View style={styles.itemRow1}>
                        <Text style={styles.textItems}>
                          {item.quantity} x {item.menuItem.name}
                        </Text>
                      </View>
                      <View style={styles.itemRow2}>
                        <Text style={styles.textItems}>
                          $ {item.menuItem.price}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
                <View style={styles.line} />
                <View style={styles.itemAmount}>
                  <Text style={styles.menuAmount}>Total Amount: </Text>
                  <Text style={styles.menuAmount}>
                    $ {selectedOrder.amount}
                  </Text>
                </View>
                <View style={styles.itemVat}>
                  <Text style={styles.menuVat}>Total VAT: </Text>
                  <Text style={styles.menuVat}>
                    $ {selectedOrder.total_vat}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.footerbuttons}>
              <TouchableOpacity style={styles.kitchenbutton} onPress={""}>
                <LinearGradient
                  colors={["#60D95E", "#0B7415"]}
                  style={styles.kitchenbutton}
                >
                  <Text style={styles.buttonText}>Move to Kitchen</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closebutton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <LinearGradient
                  colors={["#EE1414", "#880B0B"]}
                  style={styles.closebutton}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </Modal>
  );
};
