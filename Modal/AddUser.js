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
import { styles } from "../components/adduserstyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";

export default AddUser = ({ modalVisible, setModalVisible }) => {
  const [email, onChangeText] = useState("");
  const [pin, setPin] = useState("");
  const buttons = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "Clear" },
    { value: "0" },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Kitchen", value: "Kitchen" },
    { label: "Front House", value: "Front House" },
    { label: "Manager", value: "Manager" },
    { label: "Supervisor", value: "Supervisor" },
  ]);

  const onPress = (value) => {
    if (value === "Clear") {
      setPin((prevPin) => prevPin.slice(0, -1));
    } else if (value === "Clear") {
      setPin("");
    } else {
      setPin((prevPin) => prevPin + value);
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
          <View style={styles.modalOverlay}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.container}>
                <View style={styles.heading}>
                  <Text style={styles.titleText}>User Management</Text>
                </View>
                <View style={styles.body}>
                  <View style={styles.userinput}>
                    <View style={styles.userid}>
                      <Text style={styles.textstyle}>User ID</Text>
                      <TextInput
                        placeholder="Enter User ID"
                        style={styles.textInput}
                        onChangeText={onChangeText}
                        value={email}
                      />
                    </View>
                    <View style={styles.access}>
                      <Text style={styles.textstyle}>Access Role</Text>
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
                          colors={["#180564", "#745B93"]}
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
                  </View>
                  <View style={styles.numberpad}>
                    <View style={styles.userpinheading}>
                      <Text style={styles.pinstyle}>User PIN</Text>
                    </View>
                    <View style={styles.userpin}>
                      <TextInput
                        placeholder="Enter PIN"
                        style={styles.pininput}
                        onChangeText={setPin}
                        value={pin}
                        editable={false}
                        showSoftInputOnFocus={false}
                      />
                      <View style={styles.pad}>
                        {buttons.map((button, index) => (
                          <LinearGradient
                            colors={["#180564", "#745B93"]}
                            style={styles.numberbutton}
                          >
                            <TouchableOpacity
                              key={index}
                              onPress={() => onPress(button.value)}
                            >
                              <Text style={styles.numberbuttonText}>
                                {button.value}
                              </Text>
                            </TouchableOpacity>
                          </LinearGradient>
                        ))}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};
