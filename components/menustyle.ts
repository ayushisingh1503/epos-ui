import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ImageContainer = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFooter: {
    flex: 0.08,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(211, 130, 225, 0.75)",
    width: "100%",
  },
  textstyle: {
    fontSize: 18,
  },
  tabBar: {
    flex: 1,
    alignItems: "center",
  },
  logoutButton: {
    borderRadius: 15,
    marginRight: 60,
    marginBottom: 10,
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
  addButton: {
    flex: 0.08,
    alignSelf: "flex-start",
  },
  linearGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
