/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Calculator from './src/Calculator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Calculator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#ff7675',
		paddingLeft: 15,
		paddingRight: 15,
		alignItems: 'center',
		justifyContent: 'center'
  }
})