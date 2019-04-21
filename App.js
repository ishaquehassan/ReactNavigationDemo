/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Navigation from "./src/Navigation";

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Navigation />
      </View>
    );
  }
}
