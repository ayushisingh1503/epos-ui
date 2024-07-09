import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     flexDirection: "column",
  //   },
  heading: {
    flex: 0.15,
    flexDirection: "column",
    alignItems: "flex-end",
  },

  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    width: 100,
    marginTop: 25,
    marginLeft: 30,
    marginRight: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  body: {
    flex: 0.85,
    flexDirection: "column",
    alignItems: "center",
  },
  translucentRectangle: {
    flex: 1,
    width: "70%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 40,
  },
  translucentRectangleHeader: {
    flex: 0.1,
    padding: 15,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "800",
  },
  scrollview: {
    flex: 0.95,
  },
  orderRow: {
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 35,
    padding: 20,
    borderRadius: 30,
    width: "100%",
    justifyContent: "flex-end",
  },
  label: {
    flex: 0.2,
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    backgroundColor: "red",
  },
  ordernumber: {
    flex: 0.2,
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    backgroundColor: "yellow",
  },
  status: {
    flex: 0.2,
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
