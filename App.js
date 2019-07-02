import React from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

const Vista = require('./src/componentes/vista-tareas')
export default class App extends React.Component{
  render() {
    return (
        <View style={styles.container}>
            <Vista></Vista>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    backgroundColor: '#fff',
    margin: 5,
  },
});