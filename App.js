import React from 'react';
import { StyleSheet, View } from 'react-native';
import TapCounter from './components/TapCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <TapCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
