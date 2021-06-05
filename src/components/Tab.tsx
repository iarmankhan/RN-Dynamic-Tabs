import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DATA, Item} from "../data";

interface TabProps {
    item: Item
}

const Tab = React.forwardRef<any, TabProps>(({item}, ref) => {
    return (
        <View ref={ref} style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {},
    title: {
        color: '#fff',
        fontSize: 84 / DATA.length,
        textTransform: 'uppercase',
        fontWeight: '800'
    }
});

export default Tab;
