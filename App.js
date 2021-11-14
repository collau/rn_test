import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainerAddGoal}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInputGoal}
        />
        <Button title="Add" />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
  screen: {
    padding: 50,
  },
  inputContainerAddGoal: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  textInputGoal: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 5
  }
});
