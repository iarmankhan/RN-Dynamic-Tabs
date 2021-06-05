import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageCarousel from "./src/components/ImageCarousel";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
