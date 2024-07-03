import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container : {
        flex: 1, 
        flexDirection : 'column',
        justifyContent : 'center',
    },
    translucentRectangle :{
        flex: 1,
        width: '60%',
        // backgroundColor: 'rgba(0, 0, 0, 0.09)', 
        backgroundColor: 'red',
        borderRadius: 15,
        padding: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
      },
});