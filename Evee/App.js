/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//import screens
import Homescreen from './src/Homescreen'
import login from './src/login'
import signup from './src/signup'

const AppNavigator = createStackNavigator (
  {
    Home: {
      screen: Homescreen
    },
    login: {
      screen: login
    },
    signup: {
      screen: signup
    }
  }
);

export default createAppContainer(Appnavigator);