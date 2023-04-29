import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { windowWidth, windowHeight } from '../utils/Dimentions';
import { AuthContext } from '../navigation/AuthProvider';

// user async register from AuthProvider

const SignupScreen = ({ navigation }) => {
    const { register } = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            {/* use form from Component FormInput */}
            {/*  Form Input of Email */}
            <FormInput
                lableValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText='Email'
                iconType="user"
                keyboardType='Email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />
            {/* Form Input of password */}
            <FormInput
                lableValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText='Password'
                iconType="lock"
                secureTextEntry={true}
            />
            {/* confirm Password */}
            <FormInput
                lableValue={confirmPassword}
                onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                placeholderText='Password'
                iconType="lock"
                secureTextEntry={true}
            />
            {/* button Sign Up */}
            <FormButton
                buttonTitle="Sign Up"
                onPress={() => register(email, password)}
            />

            {/* text title */}
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}> By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of service </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}>and</Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text>
            </View>

            {/* Use Conponent SocialButton */}
            <SocialButton
                buttonTitle='Sign Up with Facebook'
                btnType='facebook'
                color='#4867aa'
                backgroundColor='#e6eaf4'
                onPress={() => { }}
            />
            <SocialButton
                buttonTitle='Sign Up with Google'
                btnType='google'
                color='#de4d41'
                backgroundColor='#f5e7ea'
                onPress={() => { }}
            />

            {/* Button navigation to Sign Up Screen */}
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    )
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafd',
        padding: 20
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
        fontWeight: 'bold'
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey'
    }
})