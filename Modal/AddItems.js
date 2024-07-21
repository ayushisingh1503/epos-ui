import React, { useState, useEffect } from "react";
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
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";

export default AddItems = ({
  modalVisible,
  setModalVisible,
  refreshComponent,
  selectedItem,
  setSelectedItem,
  setEditModalVisible,
  editModalVisible,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const response = await instance.get(`/menu/category/${store_id}`);
      const payload = response.data.payload;
      const formattedList = payload.categories.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      });
      return formattedList;
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      setCategory(categories);
    })();
  }, []);

  const createItem = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const reqBody = { itemName: name, price, taxRate, category: value };
      const { payload } = await instance.post(
        `/menu/item/${store_id}`,
        reqBody
      );
      const inventoryReq = { itemId: payload.itemId, quantity: 0 };
      await instance.post(`/inventory/${store_id}`, inventoryReq);
      setModalVisible(!modalVisible);
      refreshComponent();
      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

  const updateItem = async () => {
    try {
      const instance = await axiosWrapper();
      const { store_id } = await getLoggedInUser();
      const itemId = selectedItem.item_id;
      const reqBody = { category: value, name, taxRate, price };
      await instance.put(`/menu/${store_id}/item/${itemId}`, reqBody);
      setSelectedItem(undefined);
      setEditModalVisible(!editModalVisible);
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
                  onChangeText={setName}
                />
              </View>
              <View style={styles.outer}>
                <View style={styles.price}>
                  <Text style={styles.textstyle}>Price</Text>
                  <TextInput
                    placeholder="Enter Item Price"
                    style={styles.textInput}
                    onChangeText={setPrice}
                  />
                </View>
                <View style={styles.tax}>
                  <Text style={styles.textstyle}>Tax Rate</Text>
                  <TextInput
                    placeholder="Enter Tax Rate"
                    style={styles.textInput}
                    onChangeText={setTaxRate}
                  />
                </View>
              </View>
              <View style={styles.inner}>
                <View style={styles.category}>
                  <Text style={styles.textstyle}>Category</Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={category}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setCategory}
                    style={styles.dropdown}
                  />
                </View>
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
                    colors={["#EE1414", "#880B0B"]}
                    style={styles.closebutton}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.savebutton}
                  onPress={() => {
                    if (editModalVisible) {
                      updateItem();
                    } else {
                      createItem();
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
            </KeyboardAwareScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};
