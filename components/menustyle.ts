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
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
  translucentRectangle: {
    flex: 0.9,
    width: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 10,
    flexGrow: 1,
    overflow: "hidden",
    marginBottom: 130,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#E0C1FF",
    padding: 10,
    justifyContent: "space-around",
    alignContent: "center",
  },
  tableHeaderText: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 150,
  },
  scrollview: {
    flex: 0.95,
  },
  tableRow: {
    flexDirection: "row",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
    flex: 0.8,
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 30,
    width: "100%",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  // tableCell: {
  //   padding: 10,
  //   textAlign: "center",
  //   flex: 0.3,
  //   color: "white",
  //   fontSize: 18,
  //   fontWeight: "300",
  //   marginRight: 40,
  //   flexGrow: 0.5,
  // },
  tabBarLabel: {
    fontSize: 14,
  },
  icon: {
    flex: 0.3,
    color: "white",
    marginRight: 40,
  },
  sNo: {
    flex: 0.8,
    flexGrow: 1,
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 30,
  },
  category: {
    flex: 0.1,
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    marginRight: 40,
    flexGrow: 0.5,
  },
});
