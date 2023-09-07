import React, {Component} from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Tabnavigation from "./navigation/tabnavigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tabnavigation></Tabnavigation>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
