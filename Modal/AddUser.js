import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styless } from "../components/userliststyle";

export default AddUser = ({ modalVisible, setModalVisible }) => {
  const [email, onChangeText] = React.useState("");
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styless.centeredView}
      ></KeyboardAvoidingView> */}
      <View style={styless.modalOverlay}>
        <View style={styless.heading}>
          <Text style={styless.titleText}>User Management</Text>
        </View>
        <View style={styless.body}>
          <View style={styless.userinput}>
            <View style={styless.userid}>
              <Text style={styless.textstyle}>User ID</Text>
              <TextInput
                placeholder="Enter User ID"
                style={styless.textInput}
                onChangeText={onChangeText}
                value={email}
              />
            </View>
            <View style={styless.access}>
              <Text style={styless.textstyle}>Access</Text>
            </View>
            <View style={styless.footerbuttons}>
              <TouchableOpacity
                style={styless.closebutton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <LinearGradient
                  colors={["#180564", "#745B93"]}
                  style={styless.closebutton}
                >
                  <Text style={styless.buttonText}>Close</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styless.savebutton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <LinearGradient
                  colors={["#180564", "#745B93"]}
                  style={styless.savebutton}
                >
                  <Text style={styless.buttonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styless.numberpad}></View>
        </View>
      </View>
    </Modal>
  );
};
