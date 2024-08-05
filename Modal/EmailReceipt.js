import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../components/emailreceiptstyle";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { showToast } from "../helpers/toastMessage";

const EmailReceipt = ({ emailModal, setEmailModal, orderId }) => {
  const [email, setEmail] = useState("");

  const emailReceipt = useCallback(async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = {
        to: email,
      };
      await instance.post(`/order/${store_id}/${orderId}/receipt`, reqBody);
      showToast("success", "Email has been sent");
      setEmailModal(false);
    } catch (err) {
      showToast("error", err.response?.data?.message);
      console.log("Error", err);
    }
  }, [email, orderId, setEmailModal]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={emailModal}
      onRequestClose={() => setEmailModal(false)}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Email Receipt</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter email address"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.noteButton}>
          <TouchableOpacity
            onPress={() => {
              emailReceipt();
            }}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default EmailReceipt;
