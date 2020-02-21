// introducing useState hook 
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    console.log(state)
    console.log(`action type: ${action.type}`)
    console.log(`action payload: ${action.payload}`)
    switch(action.type) {
        case 'increase':
            return {...state, count: state.count + action.payload}
        case 'decrease':
            return {...state, count: state.count - action.payload}
        default: 
            return state;
    }
}

const CounterScreen = () => {
    // array destructering 
    const [state, dispatch ] = useReducer(reducer, {count: 0});
    const { count } = state;
    
    return (
        <View>
            <Button title="Increase" onPress={() => {
                console.log('helloo')
                dispatch({type:"increase", payload: 1 })
            
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type:"decrease", payload: 1 })                
            }}/>
            <Text>Current Count: {count}</Text>
        </View>
    )
};

const styles = StyleSheet.create({})

export default CounterScreen;