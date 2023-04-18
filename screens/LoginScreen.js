import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button
                title='Click Here'
                onPress={() => alert('Button Clicker')}
            />
        </View>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})