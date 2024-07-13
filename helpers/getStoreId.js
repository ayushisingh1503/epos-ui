import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStoreId = async () => {
  const _user = await AsyncStorage.getItem("user");
  const user = JSON.parse(_user);
  const storeId = user.store_id;

  return storeId;
};
