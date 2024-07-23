import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ImageContainer = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`;

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ["#180564", "#745B93"],
})`
  flex: 1;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
  },
  drawerContainer: {
    flex: 1,
    alignItems: "center",
    flexGrow: 1,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  leftSidePanel: {
    flex: 0.05,
    backgroundColor: "green",
  },
  centerPanel: {
    flex: 0.75,
    backgroundColor: "red",
  },
  rightSidePanel: {
    flex: 0.3,
    backgroundColor: "grey",
  },
  // scrollview: {
  //   flex: 0.95,
  // },
});
