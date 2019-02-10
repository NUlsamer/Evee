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
import Login from './src/login';
import SignUp from './src/signup';
import ProfileScreen from './src/ProfileScreen';
import CreateEventScreen from './src/CreateEventScreen';
import EventList from './src/EventList';

const AppNavigator = createStackNavigator ( 
  {
    Home: LandingPageScreen,
    CreateEvent: CreateEventScreen,
    Profile: ProfileScreen,
    Login: Login,
    SignUp: SignUp,
    EventList: EventList
  },
  {
  initialRouteName: 'Home'  
  }
);

export default createAppContainer(AppNavigator);