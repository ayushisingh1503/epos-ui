import { Text, View, ImageBackground, Platform, TextInput, KeyboardAvoidingView, ScrollView, Keyboard, Alert,
         TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { styles } from '../components/loginstyle'
import React, { useCallback } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = ({navigation}) => {
  
    const handleLogin = () => {
        const url = "/api/auth/login";
        axios
        .post (url,[email,password])
        .then ((res) => {
            const response = res.data;
            console.log(res);
        })
    }
      
    return ( 
        <ImageBackground
        source={require('../assets/backgroundimage.png')}
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
                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={Yup.object({
                                        email: Yup.string().email('Invalid email address').required('Required'),
                                        password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
                                        })}
                                        onSubmit={(values, { setSubmitting }) => {
                                        console.log(values);
                                        setSubmitting(false);
                                        navigation.navigate ("User");
                                        }}
                                    >
                                        {({
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            values,
                                            errors,
                                            touched,
                                            isSubmitting,
                                            }) => (
                                            <View style={styles.inner}>
                                                <Text style={styles.userID}>UserID</Text>
                                                <TextInput 
                                                    placeholder="Enter your emailId" 
                                                    style={styles.textInput}
                                                    onChangeText = {handleChange('email')}
                                                    onBlur={handleBlur('email')}
                                                    value={values.email} 
                                                    />

                                                    {touched.email && errors.email ? (
                                                    <Text style={styles.errorText}>{errors.email}</Text>
                                                    ) : null}

                                                <Text style={styles.password}>Password</Text>
                                                <TextInput 
                                                    placeholder="Enter your password" 
                                                    style={styles.textInput}  
                                                    secureTextEntry={true}
                                                    onChangeText={handleChange('password')}
                                                    onBlur={handleBlur('password')}
                                                    value={values.password}                                           
                                                    />
                                                    {touched.password && errors.password ? (
                                                    <Text style={styles.errorText}>{errors.password}</Text>
                                                    ) : null}

                                                <View style = {styles.submit} >
                                                    <TouchableOpacity 
                                                        style={styles.button} 
                                                        onPress={handleSubmit} 
                                                        disabled={isSubmitting}>
                                                    <Text style={styles.buttonText}>  Submit  </Text>
                                                    </TouchableOpacity>
                                                </View>    
                                            </View>
                                            )}
                                    </Formik>
                                </TouchableWithoutFeedback>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
export default Login;