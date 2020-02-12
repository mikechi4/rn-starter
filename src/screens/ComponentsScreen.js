import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Mike";
    return (
        <View>
            <Text style={styles.headerTextStyle}>Getting started with react native!</Text>
            <Text style={styles.textStyle}>My name is {name}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    headerTextStyle: {
        fontSize: 45
    }
})
export default ComponentsScreen;