import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../components/addnotestyle";

const AddNote = ({ modalVisible, setModalVisible, setNote, initialNote }) => {
  const [modalNote, setModalNote] = useState(initialNote);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Add Note</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your note here"
          value={modalNote}
          onChangeText={setModalNote}
        />
        <View style={styles.noteButton}>
          <TouchableOpacity
            onPress={() => {
              setNote(modalNote);
              setModalVisible(false);
            }}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Save Note</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default AddNote;
