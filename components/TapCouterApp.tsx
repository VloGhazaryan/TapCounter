import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TapCounter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap Count: {count}</Text>
      <Button title="Tap Me" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

