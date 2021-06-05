import {StatusBar} from 'expo-status-bar';
import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import ImageCarousel from "./src/components/ImageCarousel";

export default function App() {
    const scrollX = useRef(new Animated.Value(0)).current
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <ImageCarousel scrollX={scrollX}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
