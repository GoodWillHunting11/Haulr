import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function InitialLoginRegistration() {
    return (
        <View style={styles.container}>
            <Button title='Login' onPress={handleLogin}></Button>
            <Button title='Register' onPress={handleRegister}></Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
  });
