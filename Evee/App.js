/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import firebase from 'react-native-firebase'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'



//importing screens
import login from './src/login'
import signup from './src/signup'

const App = SwitchNavigator(
  {
    login,
    signup,
  },
  {
    initialRouteName: 'signup'
  }
)


export default App