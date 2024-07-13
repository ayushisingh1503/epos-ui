import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../components/menustyle";
import { LinearGradient } from "expo-linear-gradient";
import { ImageContainer } from "../components/adminstyle";
import { ScrollView } from "react-native-virtualized-view";
import AddCategory from "../Modal/AddCategory";
// import Icon from "react-native-vector-icons/MaterialIcons";

const CategoryScreen = () => {
  const [categoryList, setcategoryList] = useState([
    { SNo: "1", category: "Starter" },
    { SNo: "2", category: "Main Course" },
    { SNo: "3", category: "Desert" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <LinearGradient
            colors={["#180564", "#745B93"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Add New</Text>
          </LinearGradient>
        </TouchableOpacity>
        {modalVisible && (
          <AddCategory
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
        <View style={styles.translucentRectangle}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>S.No</Text>
            <Text style={styles.tableHeaderText}>Category Name</Text>
            <Text style={styles.tableHeaderText}>Action</Text>
          </View>
          <ScrollView style={styles.scrollview}>
            <FlatList>
              data={categoryList}
              keyExtractor={(item) => item.category}
              renderItem=
              {({ item }) => (
                <GradientBackground style={styles.tableRow}>
                  <Text style={styles.sNo}>{item.SNo}</Text>
                  <Text style={styles.category}>{item.category}</Text>
                  <Icon
                    name="delete"
                    size={30}
                    color="white"
                    style={styles.icon}
                    onPress={() => alert("Delete this user")}
                  ></Icon>
                </GradientBackground>
              )}
            </FlatList>
          </ScrollView>
        </View>
      </View>
    </ImageContainer>
  );
};

export default CategoryScreen;
