import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>My Text View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
