import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useRef} from 'react';
import {Animated, Dimensions, FlatList, StyleSheet, View} from 'react-native';
import ImageCarousel from "./src/components/ImageCarousel";
import Tabs from "./src/components/Tabs";

const {width} = Dimensions.get('screen')

export default function App() {
    const sliderRef = useRef<FlatList>(null)
    const scrollX = useRef(new Animated.Value(0)).current

    const onTabPress = useCallback(itemIndex => {
        sliderRef.current?.scrollToOffset({
            animated: true,
            offset: itemIndex * width
        })
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <ImageCarousel ref={sliderRef} scrollX={scrollX}/>
            <Tabs scrollX={scrollX} onTabPress={onTabPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
