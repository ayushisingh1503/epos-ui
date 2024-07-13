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

export default AddCategory = ({ modalVisible, setModalVisible }) => {
  const [email, onChangeText] = useState("");

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
                  onChangeText={onChangeText}
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
                  onPress={() => setModalVisible(!modalVisible)}
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
