import { StyleSheet } from "react-native";

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
});
