import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientBackground, styles } from "../components/userliststyle";
import { ImageContainer } from "../components/adminstyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-virtualized-view";
import AddUser from "../Modal/AddUser";

const UserList = ({ navigation }) => {
  // const navigation = Props.navigation
  // const {navigation} = Props

  const [userList, setUserList] = useState([
    { id: "1", name: "Ayushi", role: "kitchen" },
    { id: "2", name: "Shruti", role: "Manager" },
    { id: "3", name: "Nikita", role: "Supervisor" },
    { id: "4", name: "Gungun", role: "Front of House" },
    { id: "5", name: "Neenad", role: "Kitchen" },
    { id: "6", name: "Gungun", role: "Front of House" },
    { id: "7", name: "Neenad", role: "Kitchen" },
  ]);

  const deleteUser = () => {};
  const userRole = () => {};
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.titleText}>User List</Text>
          </View>
          <View style={styles.addNewButton}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.addButtonStyle}
              >
                <Text style={styles.buttonText}>Add New</Text>
              </LinearGradient>
            </TouchableOpacity>
            {modalVisible && (
              <AddUser
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            )}
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.translucentRectangle}>
            <View style={styles.translucentRectangleHeader}>
              <Text style={styles.textName}>Name</Text>
              <Text style={styles.textRole}>Role</Text>
              <Text style={styles.textAction}>Action</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={userList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <GradientBackground style={styles.userRow}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.role}>{item.role}</Text>
                    <Icon
                      name="delete"
                      size={30}
                      color="white"
                      style={styles.icon}
                      onPress={() => alert("Delete this user")}
                    ></Icon>
                  </GradientBackground>
                )}
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.footerButton}
            >
              <Text style={styles.buttonText}>Main Panel</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageContainer>
  );
};

export default UserList;
