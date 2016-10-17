import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Button
} from 'react-native-elements'

const ScarletScreen = () => {
  StatusBar.setBarStyle('default', true);
  return (
    <View style={styles.container}>
      <Button
        small
        icon={{name: 'envira', type: 'font-awesome'}}
        backgroundColor={'#397af8'}
        buttonStyle={styles.button}
        title='Click Me'
        onPress={() => Actions.gray()} />

        <Button
          small
          iconRight
          icon={{name: 'code'}}
          onPress={() => Actions.modal()}
          title='Open Modal' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#430076',
  },
  button: {
    marginBottom: 10
  }
});

export default ScarletScreen;
