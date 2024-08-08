import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { showToast } from "./toastMessage";
import { axiosWrapper } from "../helpers/axiosWrapper";

const ImageInput = ({ setImageKey, imageKey }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!imageKey) {
      return;
    }

    (async () => {
      const instance = await axiosWrapper();
      const response = await instance.get(`/menu/image/${imageKey}`);
      const imageUrl = response?.data?.url;
      setImageUrl(imageUrl);
    })();
  }, [imageKey]);

  const requestPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    }
  };

  const selectImage = async () => {
    requestPermission();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      await uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const formData = new FormData();
    formData.append("image", {
      uri: uri,
      type: `image/jpg`,
      name: "image",
    });

    try {
      const instance = await axiosWrapper();
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await instance.post(`/menu/image`, formData, config);

      const key = response?.data?.key;
      setImageKey(key);

      showToast("success", "Image uploaded successfully");
    } catch (err) {
      showToast("error", err.response?.data?.message);
      console.log("Error", err);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage} style={styles.iconContainer}>
        <Icon name="camera" size={24} color="black" />
      </TouchableOpacity>
      <Image style={styles.foodImage} src={imageUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    height: 190,
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    marginRight: 200,
  },

  iconContainer: {
    padding: 4,
    flexGrow: 0.4,
  },
  input: {
    flex: 1,
    height: 50,
  },
  foodImage: {
    width: 120,
    height: 100,
    marginTop: 10,
  },
});

export default ImageInput;
