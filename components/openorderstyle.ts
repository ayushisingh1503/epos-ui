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

export const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
  },
  translucentRectangle: {
    flex: 1,
    width: "98%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    marginBottom: 150,
  },
  translucentRectangleHeader: {
    flex: 0.0,
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(211, 130, 225, 2)",
  },
  orderNumber: {
    flex: 0.5,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 60,
    marginLeft: 30,
  },
  orderDateTime: {
    flex: 0.5,
    flexDirection: "row",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 60,
  },
  textDateTime: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingRight: 20,
  },
  status: {
    flex: 0.5,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 200,
  },
  scrollview: {
    flex: 0.95,
  },
  orderRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 30,
    width: "100%",
    justifyContent: "center",
  },
  order: {
    flex: 0.7,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  orderStatus: {
    flex: 0.5,
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    paddingRight: 70,
  },
  dropdown: {
    height: 25,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
});
