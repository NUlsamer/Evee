/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SwitchNavigator} from 'react-navigation'


//importing screens
import login from './src/login'
import signup from './src/signup'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const App = SwitchNavigator (
  {
    signup,
    login
  },
  {
    initialRouteName: 'signup'
  }
)

export default App