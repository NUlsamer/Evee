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
import FavoriteEventsScreen from './src/LandingPageScreen'; 
import PictureScreen from './src/PictureScreen';

const AppNavigator = createStackNavigator ( 
  {
    Home: LandingPageScreen,
    CreateEvent: CreateEventScreen,
    Profile: ProfileScreen,
    Login: Login,
    SignUp: SignUp,
    EventList: EventList,
    FavoriteEvents: FavoriteEventsScreen,
    Picture: PictureScreen,
  },
  {
  initialRouteName: 'Home'  
  }
);

export default createAppContainer(AppNavigator);