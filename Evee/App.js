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
import LandingPageScreen from './src/LandingPageScreen';
import login from './src/login';
import signup from './src/signup';
import ProfileScreen from './src/ProfileScreen';
import CreateEventScreen from './src/CreateEventScreen';


const AppNavigator = createStackNavigator ( 
  {
    Home: LandingPageScreen,
    CreatEvent: CreateEventScreen,
    Profile: ProfileScreen,
    Login: login,
    SignUp: signup
  },
  {
  initialRouteName: 'Home'  
  }
);

export default createAppContainer(AppNavigator);