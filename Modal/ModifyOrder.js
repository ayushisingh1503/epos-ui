import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, LogBox } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../components/modifyorderstyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { format } from "date-fns";

const ModifyOrder = ({
  refreshComponent,
  selectedOrder,
  setSelectedOrder,
  setModalVisible,
  modalVisible,
}) => {
  const [orderStatus, setOrderStatus] = useState("");
  useEffect(() => {
    (async () => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    })();
  }, []);

  const updateOrder = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      // const {} = orderReq,
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
                {format(selectedOrder.created_at, "EEEE, yyyy-MM-dd HH:mm:ss")}
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
                  <Text style={styles.menuVat}>$ {selectedOrder.totalVat}</Text>
                </View>
              </View>
            </View>
            <View style={styles.footerbuttons}>
              <View style={styles.footerbuttonRow1}>
                <TouchableOpacity style={styles.orderbutton} onPress={""}>
                  <LinearGradient
                    colors={["#CC91E7", "#8E12EF"]}
                    style={styles.orderbutton}
                  >
                    <Text style={styles.buttonText}>Go To Order</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.footerbuttonRow2}>
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
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </Modal>
  );
};

export default ModifyOrder;
