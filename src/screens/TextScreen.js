import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            {/* Two important props */}
            {/* autoCapitalize: iOS auto capitalizes the first letter  */}
            {/* autoCorrect: iOS autocorrects words  */}
            {/* onChangeText: use callback to send input from child (TextInput) to parent (TextScreen)  */}
            <Text>Enter name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize = "none"
                autoCorrect = {false}
                value={name}
                onChangeText={(newText) => {
                    setName(newText)
                }}
            />
            <Text>My name: {name}</Text>

            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newPass) => {
                    setPassword(newPass)
                }}
            />
            {password.length < 5 ? <Text>You passwords must be 5 characters or longer</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;