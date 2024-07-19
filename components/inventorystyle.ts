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
    flexDirection: "column",
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 30,
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
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#6213C6",
  },
  search: {
    flex: 0.15,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  filter: {
    flex: 0.08,
    flexDirection: "column",
    backgroundColor: "orange",
  },
  body: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  translucentRectangle: {
    flex: 1,
    width: "85%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
    flexGrow: 1,
    overflow: "hidden",
    marginBottom: 50,
  },
  translucentRectangleHeader: {
    flex: 0.07,
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 300,
    backgroundColor: "rgba(211, 130, 225, 2)",
  },
  textItem: {
    flex: 0.5,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  textItemQuantity: {
    flex: 0.5,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
  itemQuantity: {
    flex: 0.3,
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 25,
  },
});
