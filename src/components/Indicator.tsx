import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

export type Measure = { x: number, y: number, width: number, height: number }

interface IndicatorProps {
    scrollX: Animated.Value,
    measures: Measure[]
}

const Indicator: React.FC<IndicatorProps> = ({scrollX, measures}) => {
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    width: measures[0].width,
                    left: measures[0].x
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
        bottom: -10
    },
});

export default Indicator;
