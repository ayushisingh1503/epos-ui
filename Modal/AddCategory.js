import React, { useState, useCallback } from "react";
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

export default AddCategory = ({ modalVisible, setModalVisible }) => {
  const [name, setName] = useState("");

  const createCategory = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = { name: name };
      console.log(reqBody);
      await instance.post(`/menu/category/${store_id}`, reqBody);
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
    </Modal>
  );
};
