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
    padding: 30,
    width: "85%",
    backgroundColor: "rgba(162, 129, 177, 0.95)",
    borderRadius: 25,
    marginLeft: 10,
    marginBottom: 10,
  },
  heading: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 40,
    marginLeft: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
  },
  itemname: {
    flex: 0.5,
    justifyContent: "flex-start",
    marginLeft: 20,
    paddingBottom: 30,
  },
  outer: {
    flex: 1,
    flexDirection: "row",
  },
  prieTaxCategory: {
    flex: 0.5,
    flexDirection: "column",
  },
  imageContainer: {
    flex: 0.5,
    flexDirection: "column",
  },
  image: {
    flex: 0.5,
    justifyContent: "flex-start",
    marginLeft: 20,
    paddingBottom: 30,
  },

  innerCategory: {
    flex: 0.5,
    flexDirection: "row",
  },

  tax: {
    flex: 0.5,
    justifyContent: "flex-start",
    marginLeft: 20,
    paddingBottom: 30,
  },
  price: {
    flex: 0.5,
    justifyContent: "flex-start",
    marginLeft: 20,
    paddingBottom: 30,
  },
  category: {
    flex: 0.5,
    justifyContent: "flex-start",
    marginLeft: 20,
    paddingBottom: 50,
    paddingRight: 20,
    zIndex: 1000,
  },
  dropdown: {
    height: 40,
    marginTop: 20,
    padding: 10,
    borderRadius: 9,
    borderColor: "white",
    zIndex: 1000,
    elevation: 1000,
  },
  dropdownContainer: {
    maxHeight: 150,
    marginTop: 21,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    zIndex: 1000,
    elevation: 1000,
  },
  textstyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
  textInput: {
    height: 50,
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 9,
    alignContent: "center",
    marginRight: 50,
  },
  taxTag: {
    flex: 0.2,
    justifyContent: "flex-start",
    marginRight: 60,
    marginLeft: 20,
    paddingBottom: 30,
  },
  footerbuttons: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingTop: 50,
    paddingRight: 50,
  },
  closebutton: {
    alignItems: "center",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
  },
  savebutton: {
    alignItems: "center",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
});
