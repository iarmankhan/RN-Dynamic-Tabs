import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {DATA} from "../data";
import Tab from "./Tab";

const {width} = Dimensions.get('screen')

interface TabsProps {
    scrollX: Animated.Value
}

const Tabs: React.FC<TabsProps> = ({scrollX}) => {

    return <View style={styles.container}>
        <View style={styles.tabs}>
            {DATA.map(item => <Tab key={item.key} item={item} />)}
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 100,
        width
    },
    tabs: {
        justifyContent: 'space-evenly',
        flex: 1,
        flexDirection: 'row'
    }
});

export default Tabs;
