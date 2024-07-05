import { StyleSheet } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    flex: 0.2,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  title: {
    flex: 0.5,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 180,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },
  addNewButton: {
    flex: 0.5,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  addButtonStyle: {
    flex: 0.65,
    padding: 20,
    borderRadius: 15,
    marginRight: 60,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  body: {
    flex: 0.7,
    flexDirection: "column",
    alignItems: "center",
  },
  translucentRectangle: {
    flex: 1,
    width: "60%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
  },
  translucentRectangleHeader: {
    flex: 0.0,
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(211, 130, 225, 2)",
  },
  textName: {
    flex: 0.3,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 60,
  },
  textRole: {
    flex: 0.3,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 100,
  },
  textAction: {
    flex: 0.3,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 200,
  },
  scrollview: {
    flex: 0.95,
  },
  userRow: {
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 30,
    width: "100%",
    justifyContent: "flex-end",
  },
  userName: {
    flex: 0.2,
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  role: {
    flex: 0.5,
    color: "white",
    fontSize: 18,
    fontWeight: "300",
  },
  icon: {
    flex: 0.15,
    color: "white",
    marginLeft: 50,
  },
  footer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerButton: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    marginRight: 60,
    marginBottom: 10,
    padding: 15,
  },
});

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ["#180564", "#745B93"],
})`
  flex: 1;
  flex-direction: "row";
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeadingBackground = styled(LinearGradient).attrs({
  colors: ["#180564", "#745B93"],
})`
  flex: 0.05;
  flex-direction: "row";
  width: 100%;
`;

export const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalOverlay: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    width: "90%",
    backgroundColor: "rgba(212, 171, 231, 0.95)",
    borderRadius: 25,
    marginLeft: 68,
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
    // backgroundColor: "grey",
    padding: 30,
  },
  footerbuttons: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 50,
  },
  closebutton: {
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
    justifyContent: "flex-end",
  },
  savebutton: {
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
    // backgroundColor: "green",
    flexDirection: "column",
  },
});
