import React, { useEffect, useCallback, useState } from "react";
import { View, Text, TouchableOpacity, Modal, LogBox } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../components/modifyorderstyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { format } from "date-fns";
import { orderStatuses } from "../helpers/constants";
import { useNavigation } from "@react-navigation/native";
import { showToast } from "../helpers/toastMessage";
import Toast from "react-native-toast-message";
import EmailReceipt from "../Modal/EmailReceipt";

const ModifyOrder = ({
  refreshComponent,
  selectedOrder,
  setSelectedOrder,
  setModalVisible,
  modalVisible,
  parentScreen,
}) => {
  const navigation = useNavigation();
  const [emailModal, setEmailModal] = useState(false);

  useEffect(() => {
    (async () => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    })();
  }, []);

  const moveToKitchen = useCallback(async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const order_id = selectedOrder.order_id;
      const reqBody = {
        status: orderStatuses.inkitchen,
      };
      await instance.patch(`/order/${store_id}/${order_id}`, reqBody);
      setSelectedOrder(undefined);
      setModalVisible(!modalVisible);
      refreshComponent();
      showToast("success", "Order has been moved to kitchen");
    } catch (err) {
      showToast("error", err.response?.data?.message);
      console.log("Error", err);
    }
  }, [
    modalVisible,
    refreshComponent,
    selectedOrder.order_id,
    setModalVisible,
    setSelectedOrder,
  ]);

  const payForOrder = useCallback(async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const order_id = selectedOrder.order_id;
      const reqBody = {
        status: orderStatuses.complete,
      };
      await instance.patch(`/order/${store_id}/${order_id}`, reqBody);
      setSelectedOrder(undefined);
      setModalVisible(!modalVisible);
      refreshComponent();
      showToast("success", "Order has been paid");
    } catch (err) {
      showToast("error", err.response?.data?.message);
      console.log("Error", err);
    }
  }, [
    modalVisible,
    refreshComponent,
    selectedOrder.order_id,
    setModalVisible,
    setSelectedOrder,
  ]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      {emailModal && (
        <EmailReceipt
          emailModal={emailModal}
          setEmailModal={setEmailModal}
          orderId={selectedOrder.order_id}
        />
      )}
      <LinearGradient
        colors={["#745B93", "#180564"]}
        style={styles.itemModalOverlay}
      >
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.modalHeader}>
            <View style={styles.modalHeaderText}>
              <Text style={styles.orderNumber}>Order Number</Text>
              <Text style={styles.orderDateTime}>Date & Time</Text>
              <Text style={styles.orderAmountHeader}>Amount</Text>
              <Text style={styles.orderNumber}>Staff Name</Text>
            </View>
            <View style={styles.orderRow}>
              <Text style={styles.orderNum}>{selectedOrder.order_number}</Text>
              <Text style={styles.orderDate}>
                {format(selectedOrder.created_at, "EEEE, yyyy-MM-dd HH:mm:ss")}
              </Text>
              <Text style={styles.orderAmount}>£{selectedOrder.amount}</Text>
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
                          £ {item.menuItem.price}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
                <View style={styles.line} />
                <View style={styles.itemAmount}>
                  <Text style={styles.menuAmount}>Total Amount: </Text>
                  <Text style={styles.menuAmount}>
                    £ {selectedOrder.amount}
                  </Text>
                </View>
                <View style={styles.itemVat}>
                  <Text style={styles.menuVat}>Total VAT: </Text>
                  <Text style={styles.menuVat}>£ {selectedOrder.totalVat}</Text>
                </View>
              </View>
            </View>
            <View style={styles.footerbuttons}>
              <View style={styles.Row1}>
                <View style={styles.moveToKitchenButton}>
                  {parentScreen === orderStatuses.open && (
                    <TouchableOpacity
                      style={styles.kitchenbutton}
                      onPress={moveToKitchen}
                    >
                      <LinearGradient
                        colors={["#60D95E", "#0B7415"]}
                        style={styles.kitchenbutton}
                      >
                        <Text style={styles.buttonText}>Move to Kitchen</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                  {parentScreen === orderStatuses.complete && (
                    <TouchableOpacity
                      style={styles.emailbutton}
                      onPress={() => setEmailModal(true)}
                    >
                      <LinearGradient
                        colors={["#CC91E7", "#8E12EF"]}
                        style={styles.emailbutton}
                      >
                        <Text style={styles.buttonText}>Email Receipt</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                </View>

                <View style={styles.footerPayButton}>
                  {parentScreen === orderStatuses.inkitchen && (
                    <TouchableOpacity
                      style={styles.paybutton}
                      onPress={payForOrder}
                    >
                      <LinearGradient
                        colors={["#60D95E", "#0B7415"]}
                        style={styles.paybutton}
                      >
                        <Text style={styles.buttonText}>Pay</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View style={styles.Row2}>
                <View style={styles.gotoOrderButton}>
                  {parentScreen !== orderStatuses.complete && (
                    <TouchableOpacity
                      style={styles.orderbutton}
                      onPress={() => {
                        setModalVisible(false);
                        navigation.navigate("NewOrder", {
                          selectedOrder,
                        });
                      }}
                    >
                      <LinearGradient
                        colors={["#CC91E7", "#8E12EF"]}
                        style={styles.orderbutton}
                      >
                        <Text style={styles.buttonText}> Go To Order </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.footerCloseButton}>
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
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
      <Toast />
    </Modal>
  );
};

export default ModifyOrder;
