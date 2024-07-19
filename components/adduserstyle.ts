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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  modalOverlay: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    width: "90%",
    backgroundColor: "rgba(212, 171, 231, 0.95)",
    borderRadius: 25,
    marginLeft: 15,
    marginBottom: 30,
  },
  heading: {
    flex: 0.1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
  },
  body: {
    flex: 0.9,
    flexDirection: "row",
    // backgroundColor: "grey",
  },
  userinput: {
    flex: 0.5,
    flexDirection: "column",
    // backgroundColor: "red",
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userpinheading: {
    flex: 0.1,
    padding: 30,
  },
  userpin: {
    flex: 0.1,
  },
  pinstyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    justifyContent: "center",
  },
  pininput: {
    height: 40,
    padding: 10,
    width: 200,
    backgroundColor: "white",
    borderRadius: 9,
  },
  pad: {
    flex: 0.8,
    padding: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
    marginBottom: 120,
  },
  numberbutton: {
    backgroundColor: "#555",
    padding: 10,
    margin: 5,
    borderRadius: 15,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
  },
  numberbuttonText: {
    color: "white",
    fontSize: 20,
  },
  dropdown: {
    height: 40,
    marginTop: 15,
    padding: 10,
    borderRadius: 9,
    borderColor: "white",
  },
});
