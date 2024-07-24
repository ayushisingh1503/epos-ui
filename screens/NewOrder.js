import react, { useState, useRef } from "react";
import {
  GradientBackground,
  ImageContainer,
  styles,
} from "../components/neworderstyle";
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-virtualized-view";
import { LinearGradient } from "expo-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
const List = [
  { id: "1", name: "Starter" },
  { id: "2", name: "Main Course", title: "Explorer" },
  { id: "3", name: "Dessert", title: "Outline" },
];

export default NewOrder = () => {
  const [categoryList, setCategoryList] = useState([]);

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.container}>
        <GradientBackground>
          <View style={styles.leftContainer}>
            <View style={styles.leftSidePanel1}>
              <Pressable style={styles.menuIcons} onPress={""}>
                <Image
                  source={require("../assets/Dinner.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>Kitchen Order</Text>
              </Pressable>
              <Pressable style={styles.menuIcons}>
                <Image
                  source={require("../assets/Cocktail.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>Bar Order</Text>
              </Pressable>
              <Pressable style={styles.menuIcons}>
                <Image
                  source={require("../assets/Letter.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>Message</Text>
              </Pressable>
              <Pressable style={styles.menuIcons}>
                <Image
                  source={require("../assets/Sports Mode.png")}
                  style={styles.image}
                />
                <Text style={styles.menuText}>LogOut</Text>
              </Pressable>
            </View>
            <View style={styles.leftSidePanel2}>
              <ScrollView style={styles.scrollview}>
                <FlatList
                  data={categoryList}
                  renderItem={""}
                  keyExtractor={(item) => item.id}
                />
              </ScrollView>
            </View>
            <View style={styles.centerPanel}></View>
          </View>
        </GradientBackground>
        <View style={styles.rightContainer}>
          <View style={styles.rContainerHeader}>
            <View style={styles.rContainerHeaderImage}>
              <Image source={require("../assets/User.png")} />
              <Text style={styles.rContainerHeaderText}> Hi User,</Text>
            </View>
            <View style={styles.orderDetails}>
              <View style={styles.orderDetail1}>
                <Text style={styles.orderNumber}> Order No: {" 23 "}</Text>
              </View>
              <View style={styles.orderDetail2}>
                <Text style={styles.tableNo}> Table No: {1} </Text>
              </View>
              <View style={styles.orderDetail3}>
                <Text style={styles.orderStatus}> Status: {"Open"}</Text>
              </View>
              <View style={styles.orderDetail4}>
                <Text style={styles.createdAt}> Date: {"23 Jul 2024"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rContainerBody}>
            <ScrollView style={styles.scrollview}>
              <FlatList data={""} keyExtractor={""} renderItem={""} />
            </ScrollView>
            <TouchableOpacity onPress={""}>
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.notesLinearGradient}
              >
                <Image
                  source={require("../assets/Create.png")}
                  style={styles.image}
                ></Image>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.rContainerFooter}>
            <TouchableOpacity onPress={""}>
              <LinearGradient
                colors={["#0B7415", "#60D95E"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Place Order</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={""}>
              <LinearGradient
                colors={["#E93C3C", "#832222"]}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Clear Basket</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageContainer>
  );
};
