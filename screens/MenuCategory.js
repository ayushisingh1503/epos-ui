import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageContainer, styles } from "../components/menucategorystyle";
import { ScrollView } from "react-native-virtualized-view";
import AddCategory from "../Modal/AddCategory";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { axiosWrapper } from "../helpers/axiosWrapper";
import Icon from "react-native-vector-icons/MaterialIcons";

const CategoryScreen = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      const { store_id } = await getLoggedInUser();
      console.log(store_id);
      try {
        const instance = await axiosWrapper();
        const response = await instance.get(`/menu/category/${store_id}`);
        const payload = response.data.payload;
        console.log(payload);
        setCategoryList(payload.categories);
      } catch (err) {
        console.error("User fetch error", err);
        //@todo: add error toast
      }
    })();
  }, []);

  const deleteCategory = async ({ categoryId }) => {
    try {
      const instance = await axiosWrapper();
      await instance.delete(`/menu/category/${categoryId}`);

      const filteredCategories = userList.filter(
        (category) => category.category_id !== categoryId
      );
      setUserList(filteredCategories);

      //@todo: show success toast message
    } catch (err) {
      //@todo: show toast message
      console.log("Error", err);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {modalVisible && (
        <AddCategory
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Add New</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.translucentRectangle}>
            <View style={styles.translucentRectangleHeader}>
              <Text style={styles.textCategory}>Category Name</Text>
              <Text style={styles.textAction}>Action</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              <FlatList
                data={categoryList}
                keyExtractor={(item) => item.category_id}
                renderItem={({ item }) => (
                  <View style={styles.categoryRow}>
                    <Text style={styles.categoryName}>{item.name}</Text>
                    <Icon
                      name="delete"
                      size={30}
                      style={styles.icon}
                      onPress={() => {
                        deleteCategory({ userId: item.catgory_id });
                      }}
                    ></Icon>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </ImageContainer>
  );
};

export default CategoryScreen;
