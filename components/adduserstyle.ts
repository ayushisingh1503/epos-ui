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

export const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modalOverlay: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    borderRadius: 15,
    marginLeft: 60,
    marginBottom: 30,
  },
  heading: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
  },
  body: {
    flex: 0.9,
    flexDirection: "row",
  },
  userinput: {
    flex: 0.5,
    flexDirection: "column",
  },
  userid: {
    flex: 0.2,
    padding: 30,
  },
  textstyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
  textInput: {
    height: 40,
    marginTop: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 9,
  },
  access: {
    flex: 0.2,
    backgroundColor: "grey",
    padding: 30,
  },
  footerbuttons: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 50,
  },
  closebutton: {
    alignItems: "center",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
    justifyContent: "flex-end",
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
  numberpad: {
    flex: 0.5,
    backgroundColor: "green",
    flexDirection: "column",
  },
});
