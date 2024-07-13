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
  categoryModalOverlay: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    width: "80%",
    backgroundColor: "rgba(162, 129, 177, 0.95)",
    borderRadius: 25,
    marginLeft: 10,
    marginBottom: 70,
    marginTop: 60,
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
  categoryname: {
    justifyContent: "flex-start",
    marginRight: 60,
    marginLeft: 20,
    paddingBottom: 40,
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
    marginRight: 200,
  },
  footerbuttons: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 50,
    marginTop: 200,
    paddingRight: 50,
  },
  closebutton: {
    alignItems: "center",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
    justifyContent: "flex-end",
    backgroundColor: "EE1414",
  },
  savebutton: {
    alignItems: "center",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
    justifyContent: "flex-end",
    marginLeft: 56,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
});
