import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientBackground, styles } from "../components/userliststyle";
import { ImageContainer } from "../components/adminstyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-virtualized-view";
import AddUser from "../Modal/AddUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosWrapper } from "../helpers/axiosWrapper";

const UserList = ({ navigation }) => {
  // const navigation = Props.navigation
  // const {navigation} = Props

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const _user = await AsyncStorage.getItem("user");
      const user = JSON.parse(_user);
      const storeId = user.store_id;

      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/users/${storeId}`);
        console.log("Response", response);
        const payload = response.data.payload;
        setUserList(payload.users);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, []);

  const deleteUser = () => {};
  const updateUser = () => {};
  const patchUser = () => {};
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);
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
                style={styles.addNewButton}
              >
                <Text style={styles.buttonText}>Add New</Text>
              </LinearGradient>
            </TouchableOpacity>
            {modalVisible && (
              <AddUser
                // selectedUser={""}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                // setSelectedUser={""}
              />
            )}
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.translucentRectangle}>
            <View style={styles.translucentRectangleHeader}>
              <Text style={styles.textName}>Email</Text>
              <Text style={styles.textRole}>Role</Text>
              <Text style={styles.textAction}>Action</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={userList}
                keyExtractor={(item) => item.user_id}
                renderItem={({ item }) => (
                  <GradientBackground style={styles.userRow}>
                    <TouchableOpacity
                      style={styles.userName}
                      onPress={() => {
                        setModalVisible(true);
                        setSelectedUser(true);
                      }}
                    >
                      {modalVisible && selectedUser && (
                        <AddUser
                          selectedUser={selectedUser}
                          modalVisible={modalVisible}
                          setModalVisible={setModalVisible}
                          setSelectedUser={setSelectedUser}
                        />
                      )}
                      <Text style={styles.email}>{item.email}</Text>
                    </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
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
