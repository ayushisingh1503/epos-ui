import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../components/addcategorystyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { showToast } from "../helpers/toastMessage";
import Toast from "react-native-toast-message";

const AddCategory = ({ modalVisible, setModalVisible, refreshComponent }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const createCategory = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = { name: name, type: type };
      await instance.post(`/menu/category/${store_id}`, reqBody);
      setModalVisible(!modalVisible);
      refreshComponent();
      showToast("success", "New category has been added");
    } catch (err) {
      showToast("error", err.response?.data?.message);
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.select({
          ios: 0,
          android: 20,
        })}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.categoryModalOverlay}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.heading}>
                <Text style={styles.titleText}>Category Management</Text>
              </View>
              <View style={styles.categoryname}>
                <Text style={styles.textstyle}>Category Name</Text>
                <TextInput
                  placeholder="Enter Category Name"
                  style={styles.textInput}
                  onChangeText={setName}
                />
              </View>
              <View style={styles.categorytype}>
                <Text style={styles.textstyle}>Category Type</Text>
                <TextInput
                  placeholder="Enter Category Type"
                  style={styles.textInput}
                  onChangeText={setType}
                />
              </View>
              <View style={styles.footerbuttons}>
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
                <TouchableOpacity
                  style={styles.savebutton}
                  onPress={createCategory}
                >
                  <LinearGradient
                    colors={["#180564", "#745B93"]}
                    style={styles.savebutton}
                  >
                    <Text style={styles.buttonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Toast />
    </Modal>
  );
};
export default AddCategory;
