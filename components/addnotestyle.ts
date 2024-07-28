import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  noteButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalView: {
    marginLeft: 200,
    marginTop: 150,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "60%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    width: "100%",
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  linearGradient: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    alignItems: "center",
  },
});
