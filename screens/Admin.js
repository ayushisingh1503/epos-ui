import { Container, ImageContainer, styles } from "../components/adminstyle";
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLoggedInUser } from "../helpers/getLoggedInUser";
import { MessagesContext } from "../helpers/context";
import MessageModal from "../Modal/MessageModal";

const Admin = ({ navigation }) => {
  const [role, setRole] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const messages = useContext(MessagesContext);
  const refreshComponent = () => {
    setRefresh((currentValue) => !currentValue);
  };

  useEffect(() => {
    (async () => {
      const loggedInUser = await getLoggedInUser();
      setRole(loggedInUser.role);
    })();

    return () => {
      setRole("");
    };
  }, [refresh]);

  const handlePress = () => {
    Alert.alert("Image Pressed!", "You pressed the image.");
  };

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      {modalVisible && (
        <MessageModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          refreshComponent={refreshComponent}
          messages={messages}
        />
      )}

      <Container>
        <View style={styles.containerOne}>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.button}
            >
              <Image
                source={require("../assets/Sports Mode.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>Log Out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.containerTwo}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("NewOrder")}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.button}
            >
              <Image
                source={require("../assets/Purchase Order.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>New Order</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("OrderList")}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.button}
            >
              <Image
                source={require("../assets/Bar Chart.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>Order List</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("BackOffice")}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.button}
            >
              <Image
                source={require("../assets/iMac.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>Back Office</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.containerThreeI}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Inventory")}
          >
            <LinearGradient
              colors={["#180564", "#745B93"]}
              style={styles.button}
            >
              <Image
                source={require("../assets/Boxes.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>Inventory</Text>
            </LinearGradient>
          </TouchableOpacity>
          {(role === "manager" || role === "owner") && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("MenuLayout")}
            >
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.button}
              >
                <Image
                  source={require("../assets/Restaurant Menu.png")}
                  style={styles.buttonImage}
                />
                <Text style={styles.buttonText}>Menu</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
          {role === "owner" && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("UserList")}
            >
              <LinearGradient
                colors={["#180564", "#745B93"]}
                style={styles.button}
              >
                <Image
                  source={require("../assets/Users.png")}
                  style={styles.buttonImage}
                />
                <Text style={styles.buttonText}>Users</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.containerFour}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/Help.png")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image
              source={require("../assets/Letter.png")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
      </Container>
    </ImageContainer>
  );
};
export default Admin;
