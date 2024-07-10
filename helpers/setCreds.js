import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export const setCreds = async (payload) => {
  const user = jwtDecode(payload.accessToken);
  await AsyncStorage.multiSet([
    ["credentials", JSON.stringify(payload)],
    ["user", JSON.stringify(user)],
  ]);
};
