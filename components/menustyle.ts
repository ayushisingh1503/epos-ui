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
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(211, 130, 225, 0.75)",
    width: "100%",
  },
  overlay: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
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
    justifyContent: "flex-start",
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
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  linearGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  tableContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeader: {
    backgroundColor: "#E0C1FF",
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  tableHeaderText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
  tabBarLabel: {
    fontSize: 14,
  },
});
