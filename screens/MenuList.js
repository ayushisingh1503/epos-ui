import { styles } from "../components/neworderstyle";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const MenuList = ({
  item,
  order,
  decrementQuantity,
  incrementQuantity,
}) => {
  const orderItem = order.items?.find(
    (orderItem) => orderItem.menuItem.item_id === item.item_id
  );

  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/Screenshot 2024-07-25 041950.png")}
        style={styles.foodImage}
      ></Image>
      <View style={styles.imagedescription}>
        <Text style={styles.itemDetails}>{item.name}</Text>
        <Text style={styles.itemDetails}>£ {item.price}.00</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => {
            if (!orderItem?.quantity || orderItem?.quantity <= 0) {
              return;
            }
            decrementQuantity({
              itemId: item.item_id,
            });
          }}
        >
          <LinearGradient
            colors={["#180564", "#745B93"]}
            style={styles.decrementGradient}
          >
            <Text style={styles.buttonText}>-</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.itemQuantity}>{orderItem?.quantity ?? 0}</Text>
        <TouchableOpacity
          onPress={() => {
            incrementQuantity({
              itemId: item.item_id,
            });
          }}
        >
          <LinearGradient
            colors={["#180564", "#745B93"]}
            style={styles.incrementGradient}
          >
            <Text style={styles.buttonText}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
