import { Text, View, ImageBackground, Platform, TextInput, KeyboardAvoidingView, ScrollView, Keyboard, Alert,
         TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { styles } from './components/style';

export default function App() {
  return (
    <ImageBackground
    source={require('./assets/backgroundimage.png')}
    style={styles.imageContainer}>
    <View style={styles.appContainer}>
      <View style = {styles.rectangleOne}>
        <Text style = {styles.bigWhite}> Welcome Page</Text>
        <Text style = {styles.smallWhiteOne}>
            Sign in to {'\n'}
            continue access
        </Text>
      </View>
      <View style = {styles.rectangleTwo}>
        <View style = {styles.login}>
          <Text style = {styles.lheading}> Login </Text>
        </View>
        <View style = {styles.userinput}>
            <ScrollView contentContainerStyle={styles.outer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.inputContainer}
              keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}>
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
              <View style={styles.inner}>
                <Text style={styles.userID}>UserID</Text>
                <TextInput placeholder="Enter your emailId" style={styles.textInput} />
                <Text style={styles.password}>Password</Text>
                <TextInput placeholder="Enter your password" style={styles.textInput}  secureTextEntry={true}/>
              </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
        <View style = {styles.submit} >
            <TouchableOpacity style={styles.button} >
            {/* onPress={() => navigation.navigate('user')} */}
            <Text style={styles.buttonText}>  Submit  </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}
