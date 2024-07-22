import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "90%",
    paddingLeft: 170,
    marginTop: 20,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "grey",
    borderWidth: 1,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  icon: {
    backgroundColor: "rgba(211, 130, 225, 2)",
    padding: 5,
  },
});
