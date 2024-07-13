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
import { styles } from "../components/additemstyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";

export default AddItems = ({ modalVisible, setModalVisible }) => {
  const [email, onChangeText] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Starter", value: "Starter" },
    { label: "Main Course", value: "Main Course" },
    { label: "Dessert", value: "Dessert" },
  ]);

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
          <View style={styles.itemModalOverlay}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.heading}>
                <Text style={styles.titleText}>Item Management</Text>
              </View>
              <View style={styles.itemname}>
                <Text style={styles.textstyle}>Item Name</Text>
                <TextInput
                  placeholder="Enter Item Name"
                  style={styles.textInput}
                  onChangeText={onChangeText}
                />
              </View>
              <View style={styles.price}>
                <Text style={styles.textstyle}>Price</Text>
                <TextInput
                  placeholder="Enter Item Price"
                  style={styles.textInput}
                  onChangeText={onChangeText}
                />
              </View>
              <View style={styles.category}>
                <Text style={styles.textstyle}>Category</Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.dropdown}
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
