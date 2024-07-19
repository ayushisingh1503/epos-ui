import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    width: "70%",
    paddingLeft: 50,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    // backgroundColor: "rgba(110, 126, 208, 0.43)",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
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
});
