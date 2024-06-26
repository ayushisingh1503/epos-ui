import { StyleSheet,Platform } from 'react-native';

export const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      flexDirection:'row',
      },
    imageContainer: {
      width: '100%', 
      height: '100%',
      },
    rectangleOne:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'baseline',
      },
    rectangleTwo: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      flexDirection:'column'
    },
    bigWhite: {
      flex: 1,
      color: 'white',
      fontWeight: '900',
      fontSize: 50,
      marginLeft: 170,
      paddingTop: 230,
      justifyContent: 'center',
    //   alignItems: 'center',
      fontFamily: Platform.select({
      android: 'sans-serif',
      }),
    },
    smallWhiteOne:{
      flex: 6,
      color: 'white',
      fontWeight: '700',
      fontSize: 15,
      marginLeft: 260,
      justifyContent: 'center',
    //   alignItem: 'center',
      fontFamily: Platform.select({
      android: 'sans-serif',
      }),
    },
    login: {
      flex: 0.3,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      alignSelf: 'center',
      
    },
    lheading: {
      color: 'rgba(85, 91, 236, 1)',
      fontSize: 35,
      fontWeight: '700',
      fontFamily: Platform.select({
      android: 'sans-serif',
      }),
    },
    userinput:{
      flex: 0.5,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      paddingHorizontal: 20,
    },
    inputContainer:{
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    outer :{
      flexGrow: 1,
      justifyContent: 'center',
      padding: 24,
    },
    inner:{
      flex: 1,
      justifyContent: 'space-around',
      padding: 60,
    },
    userID:{
      fontSize: 20,
      marginBottom: 5,
    },
    textInput:{
      height: 40,
      borderColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: 3,
    },
    password: {
      fontSize: 20,
      marginBottom: 5,
      marginVertical: 40, 
    },
    submit :{
      flex: 0.3,
      alignSelf:'center',
      margin: 40,
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 50,
    },
    button: {
      backgroundColor: 'rgba(77, 83, 233, 1)',
      paddingVertical: 10,
      paddingHorizontal: 60,
      borderRadius: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
    }
  });