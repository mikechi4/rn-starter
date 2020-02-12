import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSrc={require("../../assets/forest.jpg")} imgScore="9"/>
            <ImageDetail title="Beach" imageSrc={require("../../assets/beach.jpg")} imgScore="9"/>
            <ImageDetail title="Mountain" imageSrc={require("../../assets/mountain.jpg")} imgScore="9"/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageScreen;