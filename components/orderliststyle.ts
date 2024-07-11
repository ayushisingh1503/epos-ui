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
  orderNumber: {
    flex: 0.5,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 60,
    marginLeft: 30,
  },
  status: {
    flex: 0.5,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 200,
  },
  scrollview: {
    flex: 0.95,
  },
  orderRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 30,
    width: "100%",
    justifyContent: "center",
  },
  order: {
    flex: 0.7,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  orderStatus: {
    flex: 0.5,
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    paddingRight: 70,
  },
  logout: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  logoutButton: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    borderRadius: 15,
    marginRight: 60,
    marginBottom: 10,
    padding: 15,
    marginLeft: 25,
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
