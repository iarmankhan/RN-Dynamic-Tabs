import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {DATA} from "../data";

const {width} = Dimensions.get('screen')

export type Measure = { x: number, y: number, width: number, height: number }

interface IndicatorProps {
    scrollX: Animated.Value,
    measures: Measure[]
}

const Indicator: React.FC<IndicatorProps> = ({scrollX, measures}) => {
    const inputRange = DATA.map((_, index) => index * width);
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(m => m.width),
    })

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(m => m.x),
    })

    console.log(indicatorWidth)
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    width: indicatorWidth,
                    left: 0,
                    transform: [{translateX}]
                }
            ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 4,
        backgroundColor: 'white',
        bottom: -10,
        borderRadius: 5
    },
});

export default Indicator;
