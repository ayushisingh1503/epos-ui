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
  messageModal: {
    marginLeft: 220,
    marginTop: 150,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 20,
    padding: 35,
    width: "65%",
  },
  allMessages: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  messageList: {
    flexDirection: "column",
  },
  closeButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 60,
  },
  notificationIcon: {
    marginLeft: 10,
    marginTop: 5,
    marginRight: 15,
  },
  messages: {
    padding: 5,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  messageText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    alignItems: "center",
  },
});
