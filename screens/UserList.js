import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientBackground, styles } from "../components/userliststyle";
import { ImageContainer } from "../components/adminstyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-virtualized-view";
import AddUser from "../Modal/AddUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import { getStoreId } from "../helpers/getStoreId";

const UserList = ({ navigation }) => {
  // const navigation = Props.navigation
  // const {navigation} = Props

  const [userList, setUserList] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const refreshComponent = () => {
    setRefresh((currentValue) => !currentValue);
  };
  useEffect(() => {
    (async () => {
      const storeId = await getStoreId();
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/users/${storeId}`);
        const payload = response.data.payload;
        setUserList(payload.users);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, [refresh]);

  const deleteUser = async ({ userId }) => {
    try {
      const instance = await axiosWrapper();
      await instance.delete(`/user/${userId}`);

      const filteredUsers = userList.filter((user) => user.user_id !== userId);
      setUserList(filteredUsers);

      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {editModalVisible && selectedUser && (
        <AddUser
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          refreshComponent={refreshComponent}
          editModalVisible={editModalVisible}
          setEditModalVisible={setEditModalVisible}
        />
      )}
      {modalVisible && (
        <AddUser
          selectedUser={undefined}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setSelectedUser={undefined}
          refreshComponent={refreshComponent}
        />
      )}
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.titleText}>User List</Text>
          </View>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.addNewButton}
              >
                <Text style={styles.buttonText}>Add New</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.translucentRectangle}>
            <View style={styles.translucentRectangleHeader}>
              <Text style={styles.textName}>Email</Text>
              <Text style={styles.textRole}>Name</Text>
              <Text style={styles.textRole}>Role</Text>
              <Text style={styles.textAction}>Action</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={userList}
                keyExtractor={(item) => item.user_id}
                renderItem={({ item }) => (
                  <GradientBackground style={styles.userRow} key={item.user_id}>
                    <TouchableOpacity
                      style={styles.userName}
                      onPress={() => {
                        console.log("userlist:", item);
                        setSelectedUser(item);
                        setEditModalVisible(true);
                      }}
                    >
                      <Text style={styles.email}>{item.email}</Text>
                    </TouchableOpacity>
                    <Text style={styles.role}>{item.name}</Text>
                    <Text style={styles.role}>{item.role}</Text>
                    <Icon
                      name="delete"
                      size={30}
                      style={styles.icon}
                      onPress={() => {
                        deleteUser({ userId: item.user_id });
                      }}
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
