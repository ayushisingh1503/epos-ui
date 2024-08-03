import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ImageContainer = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  flexdirection: column;
`;
export const ViewContainer = styled.View`
  flex: 1;
`;

export const styles = StyleSheet.create({
  containerOne: {
    flex: 0.2,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
    paddingTop: 50,
  },
  containerTwo: {
    flex: 0.17,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: 40,
    paddingTop: 40,
  },
  containerThree: {
    flex: 0.6,
    backgroundColor: "transparent",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    // paddingBottom : 150,
  },
  containerFour: {
    flex: 0.14,
    backgroundColor: "rgba(211, 130, 225, 0.75)",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between",
  },
  containerThreeI: {
    flex: 0.5,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: 70,
  },
  containerThreeII: {
    flex: 0.5,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginStart: 10,
    paddingBottom: 70,
  },
  imageStyle: {
    marginLeft: 50,
    marginRight: 50,
  },
  button: {
    alignItems: "center",
    padding: 35,
    borderRadius: 15,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
