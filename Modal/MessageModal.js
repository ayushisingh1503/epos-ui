import React from "react";
import { View, Text, Modal, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../components/addnotestyle";
import Icon from "react-native-vector-icons/FontAwesome";

const MessageModal = ({ modalVisible, setModalVisible, messages }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.messageModal}>
        <Text style={styles.allMessages}>All Messages</Text>
        <View style={styles.messageList}>
          <FlatList
            data={[...messages].reverse()}
            renderItem={({ item }) => (
              <View style={styles.messages}>
                <Icon
                  name="circle"
                  size={10}
                  color="green"
                  style={styles.notificationIcon}
                />
                <Text style={styles.messageText}>{item}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.closeButton}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Close</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default MessageModal;
