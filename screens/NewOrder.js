import react, { useState, useRef } from "react";
import {
  GradientBackground,
  ImageContainer,
  styles,
} from "../components/neworderstyle";
import { Button, DrawerLayoutAndroid, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

export default NewOrder = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.drawerContainer, styles.navigationContainer]}>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={setDrawerPosition}
      renderNavigationView={navigationView}
    >
      <ImageContainer source={require("../assets/layout.png")}>
        <View style={styles.container}>
          <View style={styles.leftSidePanel}></View>
          <View style={styles.centerPanel}>
            {/* <ScrollView style={styles.scrollview}></ScrollView> */}
          </View>
          <View style={styles.rightSidePanel}></View>
        </View>
      </ImageContainer>
    </DrawerLayoutAndroid>
  );
};
