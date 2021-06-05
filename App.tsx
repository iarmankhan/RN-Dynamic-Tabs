import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import ImageCarousel from "./src/components/ImageCarousel";
import Tabs from "./src/components/Tabs";

export default function App() {
    const scrollX = useRef(new Animated.Value(0)).current

    useEffect(() => {
        console.log(scrollX)
    })

    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <ImageCarousel scrollX={scrollX}/>
            <Tabs scrollX={scrollX} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
