import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCreds } from "./setCreds";

export const axiosWrapper = async () => {
  const baseUrl = "https://1d21-31-205-114-110.ngrok-free.app";

  // Creating an axios instance
  const instance = axios.create({
    baseURL: baseUrl,
  });

  // Modifying the instance to add the interceptor
  instance.interceptors.request.use(async (config) => {
    const [credsResult, userResult] = await AsyncStorage.multiGet([
      "credentials",
      "user",
    ]);

    const _tokens = credsResult[1];
    const _user = userResult[1];

    if (!_tokens) {
      return config;
    }

    const { expirationTime, refreshToken, accessToken } = JSON.parse(_tokens);

    const accessTokenValid = expirationTime >= Date.now();

    if (accessTokenValid) {
      console.log("Access token valid");
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }

    console.log("Access token expired");
    console.log(_user);
    if (!_user) {
      return config;
    }

    const { user_id } = JSON.parse(_user);
    const response = await axios.post(
      "/auth/refresh",
      {
        token: refreshToken,
        userId: user_id,
      },
      { baseURL: baseUrl }
    );
    console.log(response);

    const payload = response.data.payload;

    await setCreds(payload);

    config.headers.Authorization = `Bearer ${payload.accessToken}`;
    return config;
  });

  return instance;
};
