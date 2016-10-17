import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput } from 'react-native-elements'

const GrayScreen = () => {
  StatusBar.setBarStyle('default', true);
  someFunction = () => {
    console.log(index);
  }
  return (
    <View style={styles.container}>
      <FormLabel>Name</FormLabel>
      <FormInput inputStyle={styles.inputStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#430076',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  inputStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default GrayScreen;
