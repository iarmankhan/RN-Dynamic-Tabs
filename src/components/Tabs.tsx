import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {DATA} from "../data";
import Tab from "./Tab";
import Indicator, {Measure} from "./Indicator";

const {width} = Dimensions.get('screen')

interface TabsProps {
    scrollX: Animated.Value
}

const Tabs: React.FC<TabsProps> = ({scrollX}) => {
    const containerRef = useRef(null);
    const [measures, setMeasures] = useState<Measure[]>([]);

    useEffect(() => {
        const m: Measure[] = [];
        DATA.forEach(item => {
            item.ref.current?.measureLayout(
                containerRef.current,
                (x: number, y: number, width: number, height: number) => {
                    m.push({x, y, width, height})

                    if (m.length === DATA.length) {
                        setMeasures(m)
                    }
                },
                () => {
                    console.log("errors")
                }
            )
        })
    }, [containerRef.current])

    return <View style={styles.container}>
        <View ref={containerRef} style={styles.tabs}>
            {DATA.map(item => <Tab key={item.key} item={item} ref={item.ref}/>)}
        </View>
        {measures.length > 0 && <Indicator scrollX={scrollX} measures={measures}/>}
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
