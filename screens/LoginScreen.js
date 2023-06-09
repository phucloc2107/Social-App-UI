import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { windowWidth, windowHeight } from '../utils/Dimentions';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            {/* Logo of Login Screen */}
            <Image
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Social App</Text>

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
            {/* button Sign In */}
            <FormButton
                buttonTitle="Sign In"
                onPress={() => login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Use Conponent SocialButton */}
            <SocialButton
                buttonTitle='Sign In with Facebook'
                btnType='facebook'
                color='#4867aa'
                backgroundColor='#e6eaf4'
                onPress={() => { }}
            />
            <SocialButton
                buttonTitle='Sign In with Google'
                btnType='google'
                color='#de4d41'
                backgroundColor='#f5e7ea'
                onPress={() => { }}
            />

            {/* Button navigation to Sign Up Screen */}
            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Dont't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafd',
        padding: 20
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: 15
    },
    forgotButton: {
        marginVertical: 35
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular'
    }
})