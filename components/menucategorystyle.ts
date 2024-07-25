import { Dimensions, StyleSheet } from "react-native";
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
  flex-direction: "row";
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    flex: 0.08,
    flexDirection: "row",
    marginTop: 10,
  },
  body: {
    flex: 0.9,
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
  },
  add: {
    flex: 0.2,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
  },
  linearGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
  translucentRectangle: {
    flex: 1,
    width: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
    flexGrow: 1,
    overflow: "hidden",
    marginBottom: 160,
  },
  translucentRectangleHeader: {
    flex: 0.07,
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(211, 130, 225, 2)",
  },
  textCategoryName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 250,
    marginLeft: 60,
  },
  textCategoryType: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 380,
  },
  textAction: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 100,
  },
  categoryRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    flexGrow: 1,
    backgroundColor: "white",
  },
  categoryName: {
    flex: 0.7,
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 60,
  },
  categoryIcon: {
    flex: 0.3,
    paddingLeft: 150,
    color: "#E93C3C",
  },
  logoutButton: {
    borderRadius: 15,
    marginRight: 60,
    marginBottom: 10,
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  translucentRectangleItemHeader: {
    flex: 0.05,
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(211, 130, 225, 2)",
  },
  textItem: {
    flex: 0.3,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 60,
  },
  textItemAction: {
    flex: 0.1,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  textItemCategory: {
    flex: 0.3,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 10,
    paddingRight: 20,
  },
  textPrice: {
    flex: 0.2,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  textTax: {
    flex: 0.2,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 40,
  },
  scrollview: {
    flex: 0.95,
  },
  itemRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
    padding: 7,
    borderRadius: 5,
    flexGrow: 1,
    backgroundColor: "white",
  },
  itemName: {
    flex: 0.3,
    paddingLeft: 60,
  },
  itemNameText: {
    fontSize: 16,
    fontWeight: "400",
  },
  itemCategory: {
    flex: 0.3,
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 25,
  },
  itemPrice: {
    flex: 0.2,
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 25,
  },
  itemTax: {
    flex: 0.2,
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 60,
  },
  itemIcon: {
    flex: 0.1,
    color: "#E93C3C",
  },
});
