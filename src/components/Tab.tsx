import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DATA, Item} from "../data";

interface TabProps {
    item: Item
    onTabPress: () => void
}

const Tab = React.forwardRef<any, TabProps>(({item, onTabPress}, ref) => {
    return (
        <TouchableOpacity onPress={onTabPress}>
            <View ref={ref} style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
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
