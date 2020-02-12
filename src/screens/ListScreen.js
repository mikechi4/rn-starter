import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {"name": "Jared", "Age": 1},
        {"name": "Coleman", "Age": 2},
        {"name": "Ryan", "Age": 3},
        {"name": "Andrew", "Age": 4},
        {"name": "Amanda", "Age": 5},
        {"name": "MArv", "Age": 6},
        {"name": "Curt", "Age": 7},
        {"name": "poew", "Age": 8},
        {"name": "oewp", "Age": 9},
        {"name": "dddd", "Age": 10}
    ];

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{ item.name } - Age {item.Age}</Text>
            }}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginBottom: 50,
        borderColor: 'black'
    }
})


export default ListScreen;