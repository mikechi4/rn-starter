
import React, { useReducer } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
// define reducer function outside of component 
const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number }
    // action === { object that describes the update we want to make . colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

    // we always return a new object that will be used as state

    switch(action.colorToChange) {
        case 'red':
            if(state.red + action.amount > 255 || state.red + action.amount < 0)
            return { ...state, red: state.red + action.amount};
        case 'green':
            return { ...state, green: state.green + action.amount};
        case 'blue':
            return { ...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch ] = useReducer(reducer, {red: 0, green: 0, blue: 0 });
    const {red, green, blue } = state;
    return (
        <View>
           <ColorCounter 
                color="Red" 
                onIncrease={() => { dispatch({colorToChange:"red", amount: COLOR_INCREMENT})}} 
                onDecrease={() => { dispatch({colorToChange:"red", amount: -1 * COLOR_INCREMENT})}}
            />
           <ColorCounter 
                color="Green" 
                onIncrease={() => { dispatch({colorToChange:"green", amount: COLOR_INCREMENT})}} 
                onDecrease={() => { dispatch({colorToChange:"green", amount: -1 * COLOR_INCREMENT})}}
            />
           <ColorCounter 
                color="Blue" 
                onIncrease={() => { dispatch({colorToChange:"blue", amount: COLOR_INCREMENT})}} 
                onDecrease={() => { dispatch({colorToChange:"blue", amount: -1 * COLOR_INCREMENT})}}
            />
           <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    ) 
};


const styles = StyleSheet.create({})

export default SquareScreen;