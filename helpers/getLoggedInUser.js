import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLoggedInUser = async () => {
  const _user = await AsyncStorage.getItem("user");
  const user = JSON.parse(_user);

  return user;
};
