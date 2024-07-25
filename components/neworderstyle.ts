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
  drawerContainer: {
    flex: 1,
  },
  leftSidePanel1: {
    flex: 0.07,
    flexDirection: "column",
    backgroundColor: "rgba(252, 252, 252, 0.19)",
    marginRight: 10,
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
    flex: 0.2,
  },
  rContainerHeaderImage: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 8,
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
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    flexWrap: "wrap",
    padding: 10,
    borderColor: "#000000",
    borderBottomWidth: 1.5,
  },
  orderDetail1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 20,
  },
  orderNumber: {
    paddingTop: 10,
    fontWeight: "400",
    fontSize: 16,
  },
  orderDetail2: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tableNo: {
    paddingTop: 10,
    fontWeight: "400",
    fontSize: 16,
  },
  orderDetail3: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginRight: 30,
  },
  orderStatus: {
    paddingTop: 10,
    fontWeight: "400",
    fontSize: 16,
  },
  orderDetail4: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  createdAt: {
    paddingTop: 10,
    fontWeight: "400",
    fontSize: 16,
  },
  rContainerBody: {
    flex: 0.7,
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
    flex: 0.2,
    flexDirection: "column",
    backgroundColor: "rgba(252, 252, 252, 0.19)",
  },
  foodIcon: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 10,
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
    width: 100,
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
});
