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
  flex: 0.8;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    backgroundColor: "transparent",
  },
  leftContainer: {
    flex: 0.75,
    flexDirection: "row",
    flexGrow: 1,
  },
  leftSidePanel1: {
    flex: 0.07,
    flexDirection: "column",
    backgroundColor: "rgba(252, 252, 252, 0.19)",
    marginRight: 10,
    marginVertical: 10,
    marginBottom: 30,
  },
  centerPanel: {
    flex: 0.95,
  },
  leftSidePanelIcons: {
    flex: 0.9,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    flexGrow: 1,
  },
  scrollview: {
    flex: 1,
  },
  itemIcon: {
    marginVertical: 5,
    color: "white",
  },
  rightContainer: {
    flex: 0.25,
    flexDirection: "column",
  },
  rContainerHeader: {
    flex: 0.25,
  },
  rContainerHeaderImage: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 8,
    marginBottom: 20,
  },
  rContainerHeaderText: {
    paddingTop: 10,
    paddingLeft: 10,
    fontWeight: "600",
    fontSize: 18,
  },
  user: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  orderDetails: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    padding: 10,
    borderColor: "#000000",
    borderBottomWidth: 1.3,
  },
  orderDetail1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 20,
    marginLeft: 17,
  },
  orderNumber: {
    // paddingTop: 10,
    fontWeight: "400",
    fontSize: 14,
  },
  orderDetail2: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  orderDetail3: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    marginRight: 30,
  },
  orderStatus: {
    // paddingTop: 10,
    fontWeight: "400",
    fontSize: 14,
  },
  orderDetail4: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 17,
  },
  createdAt: {
    fontWeight: "400",
    fontSize: 14,
  },
  rContainerBody: {
    flex: 0.7,
    flexDirection: "column",
  },
  notesLinearGradient: {
    paddingVertical: 10,
    marginRight: 230,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  rContainerFooter: {
    flex: 0.15,
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  linearGradient: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    alignItems: "center",
  },
  leftSidePanel2: {
    flex: 0.16,
    flexDirection: "column",
    backgroundColor: "rgba(252, 252, 252, 0.19)",
    marginVertical: 10,
    marginBottom: 30,
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 40,
  },
  categoryList: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    marginVertical: 10,
  },
  foodIcon: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  itemDetails: {
    fontSize: 14,
    fontWeight: "300",
    color: "white",
  },
  barIcon: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  messageIcon: {
    flex: 0.9,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingLeft: 10,
  },
  logoutIcon: {
    paddingTop: 10,
    paddingBottom: 30,
    paddingLeft: 10,
  },
  menuText: {
    color: "white",
    fontSize: 9,
  },
  image: {
    width: 40,
    height: 40,
  },
  item: {
    padding: 20,
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
  card: {
    flex: 1,
    backgroundColor: "#8737C6",
    overflow: "hidden",
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  foodImage: {
    width: 120,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
  },
  imagedescription: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#DBAEFF",
  },
  itemQuantity: {
    marginRight: 5,
    fontSize: 16,
    fontWeight: "400",
  },
  incrementGradient: {
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginHorizontal: 20,
  },
  decrementGradient: {
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginHorizontal: 20,
  },
  quantityText: {
    fontSize: 18,
  },
  itemLists: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
  },
  itemdetail: {
    flexDirection: "row",
  },
});
