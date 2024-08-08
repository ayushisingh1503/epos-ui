import { styles } from "../components/neworderstyle";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { axiosWrapper } from "../helpers/axiosWrapper";

export const MenuList = ({
  item,
  order,
  decrementQuantity,
  incrementQuantity,
}) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!item.image_key) {
      return;
    }

    (async () => {
      const instance = await axiosWrapper();
      const response = await instance.get(`/menu/image/${item.image_key}`);
      const imageUrl = response?.data?.url;

      setImageUrl(imageUrl);
    })();
  }, [item.image_key]);

  const orderItem = order.items?.find(
    (orderItem) => orderItem.menuItem.item_id === item.item_id
  );

  return (
    <View style={styles.card}>
      <Image style={styles.foodImage} src={imageUrl}></Image>
      <View style={styles.imagedescription}>
        <Text style={styles.itemNameDetails}>{item.name}</Text>
        <Text style={styles.itemPriceDetails}>£ {item.price}</Text>
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
