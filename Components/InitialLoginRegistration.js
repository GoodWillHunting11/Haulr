import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InitialLoginRegistration() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HAULR</Text>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.text}>Register</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
    },
});
