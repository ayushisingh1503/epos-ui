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
    flex: 0.15,
    paddingBottom: 5,
    backgroundColor: "rgba(211, 130, 225, 0.75)",
    marginBottom: 20,
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
  },
  add: {
    flex: 0.1,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 130,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
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
  },
  // add: {
  //   flex: 0.5,
  //   flexDirection: "row",
  //   justifyContent: "flex-end",
  // },
  // addNewButton: {
  //   borderRadius: 15,
  //   marginTop: 50,
  //   alignItems: "center",
  //   paddingLeft: 40,
  //   paddingRight: 40,
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   flex: 0.5,
  //   justifyContent: "center",
  //   marginRight: 60,
  //   padding: 15,
  // },
  // buttonText: {
  //   fontSize: 18,
  //   color: "white",
  //   fontWeight: "500",
  // },
  body: {
    flex: 0.65,
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
  },
  translucentRectangle: {
    flex: 1,
    width: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
    flexGrow: 1,
    marginTop: 20,
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
    flex: 0.4,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 70,
    flexGrow: 1,
  },
  textRole: {
    flex: 0.3,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingRight: 90,
    flexGrow: 0.5,
  },
  textAction: {
    flex: 0.2,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
    flexGrow: 1,
  },
  userName: {
    flex: 0.8,
    flexGrow: 1,
  },
  email: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 30,
  },
  role: {
    flex: 0.1,
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    marginRight: 40,
    flexGrow: 0.5,
  },
  icon: {
    flex: 0.1,
    color: "#E93C3C",
    marginRight: 40,
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
