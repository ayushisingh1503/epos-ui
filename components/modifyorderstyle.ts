import { StyleSheet, Dimensions } from "react-native";
import { styled } from "styled-components/native";

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
    alignItems: "center",
    flexDirection: "column",
  },
  itemModalOverlay: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    width: "85%",
    backgroundColor: "rgba(162, 129, 177, 0.95)",
    borderRadius: 15,
    marginLeft: 90,
    marginBottom: 30,
    marginTop: 50,
    marginHorizontal: 20,
  },
  modalHeader: {
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: "#CC91E7",
    borderRadius: 10,
    marginBottom: 50,
  },
  modalHeaderText: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
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
  orderRow: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
  },
  orderNum: {
    flex: 0.5,
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 90,
    marginLeft: 30,
  },
  orderDate: {
    color: "black",
    flex: 0.5,
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 20,
  },
  orderAmount: {
    flex: 0.5,
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 110,
    marginLeft: 30,
  },
  orderStaff: {
    flex: 0.5,
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 90,
    marginLeft: 30,
  },
  modalBody: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  orderItems: {
    flex: 1.5,
    flexDirection: "column",
  },
  translucentBody: {
    flex: 1,
    flexDirection: "column",
    flexGrow: 1,
    width: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
    marginLeft: 20,
  },
  listHead: {
    flex: 0.1,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  itemLists: {
    flex: 0.1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  menuText: {
    flex: 0.01,
    flexDirection: "row",
    alignItems: "flex-start",
    borderColor: "white",
  },
  textItems: {
    fontSize: 18,
    marginBottom: 8,
    color: "white",
  },
  itemRow1: {
    flex: 0.5,
    justifyContent: "center",
  },
  itemRow2: {
    flex: 0.5,
    justifyContent: "center",
  },
  itemAmount: {
    flex: 0.05,
    flexDirection: "row",
  },
  menuAmount: {
    fontSize: 18,
    marginBottom: 8,
    color: "white",
    paddingRight: 200,
  },
  itemVat: {
    flex: 0.05,
    flexDirection: "row",
  },
  menuVat: {
    fontSize: 18,
    marginBottom: 8,
    color: "white",
    paddingRight: 235,
  },
  footerbuttons: {
    flex: 0.6,
    marginTop: 400,
    flexDirection: "row",
    marginRight: 20,
  },
  closebutton: {
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    marginRight: 30,
  },
  kitchenbutton: {
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 15,
  },
  orderbutton: {
    flex: 0.6,
    alignItems: "flex-start",
  },
  gotoOrderButton: {
    padding: 10,
    paddingLeft: 61,
    paddingRight: 61,
    borderRadius: 15,
    marginLeft: 20,
    backgroundColor: "#A281B1",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
});
