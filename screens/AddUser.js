import  { View, Text, Modal, TouchableOpacity, Button} from 'react-native';
import React, { useState } from 'react';
import {styles}  from '../components/adduser';

const AddUser = () =>{

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style = {styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.translucentRectangle}>
                        <Text>User List</Text>
                        <View style={styles.footerButtons}>
                            <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
                            <Button title="OK" color="green" onPress={() => alert('OK Pressed')} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
} 
  export default AddUser;