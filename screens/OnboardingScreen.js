import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>OnboardingScreen</Text>
            <Button
                title='Click Here'
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})