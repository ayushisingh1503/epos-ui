import { StyleSheet, Dimensions } from "react-native";
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
    flexDirection: "column",
  },
  header: {
    flex: 0.075,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 60,
    paddingLeft: 560,
    paddingTop: 25,
    backgroundColor: "rgba(211, 130, 225, 0.75)",
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
    fontSize: 23,
    fontWeight: "700",
    color: "white",
  },
  tabBar: {
    backgroundColor: "white",
  },
  tabBarIndicator: {
    backgroundColor: "rgba(211, 130, 225, 0.75)",
  },
  tabBarLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
  },
  tabBarLabelFocused: {
    color: "rgba(211, 130, 225, 0.75)",
  },
  scrollview: {
    flex: 0.95,
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
    flexGrow: 1,
    flexDirection: "row",
    marginBottom: 120,
  },
  row: {
    justifyContent: "flex-start",
  },
  card: {
    width: 300,
    backgroundColor: "#6A4CA8",
    marginHorizontal: 20,
    justifyContent: "space-between",
    // overflow: "hidden",
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardheader: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#8737C6",
    paddingBottom: 5,
  },
  cardHeaderIcons: {
    flexDirection: "row",
    justifyContent: "center",
    width: 80,
  },
  orderNo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 5,
    marginBottom: 5,
    marginTop: 5,
    justifyContent: "center",
  },

  itemsList: {
    flex: 1,
    marginTop: 5,
  },
  cardItems: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 14,
    color: "#fff",
  },
  noteIcon: {
    alignSelf: "flex-end",
    marginTop: 10,
    padding: 10,
    marginRight: 10,
  },
  item: {
    padding: 5,
    marginBottom: 1,
  },
  dropdown: {
    width: "60%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    marginLeft: 20,
    zIndex: 9999,
    height: 60,
  },
  dropdownContainer: {
    width: "60%",
    borderColor: "gray",
    marginLeft: 20,
    zIndex: 9999,
    borderRadius: 30,
  },
});
