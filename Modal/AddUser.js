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
import { styles } from "../components/adduserstyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";

const AddUser = ({
  modalVisible,
  setModalVisible,
  selectedUser,
  setSelectedUser,
  editModalVisible,
  setEditModalVisible,
  refreshComponent,
}) => {
  const [email, setEmail] = useState(selectedUser?.email);
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
    { value: "<--" },
    { value: "0" },
    { value: "Clear" },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedUser?.role);
  const [name, setName] = useState(selectedUser?.name);

  const [items, setItems] = useState([
    { label: "Admin", value: "admin" },
    { label: "Staff", value: "staff" },
    { label: "Manager", value: "manager" },
    { label: "Kitchen", value: "Kitchen" },
  ]);

  const updateUser = async () => {
    try {
      const instance = await axiosWrapper();
      const userId = selectedUser.user_id;
      const reqBody = { email, pin, role: value, name };
      await instance.put(`/user/${userId}`, reqBody);
      setSelectedUser(undefined);
      setEditModalVisible(!editModalVisible);
      refreshComponent();
      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

  const createUser = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = { emailId: email, pin, accessRole: value, name };
      await instance.post(`/user/${store_id}`, reqBody);
      setModalVisible(!modalVisible);
      refreshComponent();
      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

  const onPress = (value) => {
    if (value === "<--") {
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
                      <Text style={styles.textstyle}>Email</Text>
                      <TextInput
                        placeholder="Enter Email"
                        style={styles.textInput}
                        onChangeText={setEmail}
                        value={email}
                      />
                    </View>
                    <View style={styles.userid}>
                      <Text style={styles.textstyle}>Name</Text>
                      <TextInput
                        placeholder="Enter Name"
                        style={styles.textInput}
                        onChangeText={setName}
                        value={name}
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
                        dropDownContainerStyle={styles.dropdownContainer}
                      />
                    </View>
                    <View style={styles.footerbuttons}>
                      <TouchableOpacity
                        style={styles.closebutton}
                        onPress={() =>
                          editModalVisible
                            ? setEditModalVisible(!editModalVisible)
                            : setModalVisible(!modalVisible)
                        }
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
                        onPress={() => {
                          if (editModalVisible) {
                            updateUser();
                          } else {
                            createUser();
                          }
                        }}
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
                    </View>
                    <View style={styles.pad}>
                      {buttons.map((button, index) => (
                        <LinearGradient
                          colors={["#180564", "#745B93"]}
                          style={styles.numberbutton}
                          key={index}
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
            </KeyboardAwareScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default AddUser;
