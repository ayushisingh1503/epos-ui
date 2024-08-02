import React, { forwardRef } from "react";
import Toast from "react-native-toast-message";

export const showToast = (type, text1, text2) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
};

// eslint-disable-next-line react/display-name
const ToastConfig = forwardRef((props, ref) => {
  <Toast ref={ref} style={{ zIndex: 9999 }} />;
});

export { ToastConfig };
