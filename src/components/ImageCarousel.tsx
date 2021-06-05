import React from 'react';
import {StyleSheet, View, Animated, Image, Dimensions, FlatList} from 'react-native';
import {DATA} from "../data";

const {width, height} = Dimensions.get('screen')

interface ImageCarouselProps {
    scrollX: Animated.Value
}

const ImageCarousel = React.forwardRef<FlatList, ImageCarouselProps>(({scrollX}, ref) => {
    return (
        <Animated.FlatList
            ref={ref}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
            )}
            data={DATA}
            keyExtractor={item => item.key}
            renderItem={({item}) => {
                return (
                    <View style={{width, height}}>
                        <Image
                            source={{uri: item.image}}
                            style={styles.images}
                        />
                        <View style={styles.backdrop}/>
                    </View>
                )
            }}
        />);
});

const styles = StyleSheet.create({
    images: {
        flex: 1,
        resizeMode: 'cover'
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }
});

export default ImageCarousel;
