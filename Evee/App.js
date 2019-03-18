import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//import screens
import LandingPageScreen from './src/LandingPageScreen';
import Login from './src/LoginScreenScreen';
import SignUp from './src/SignupScreen';
import ProfileScreen from './src/ProfileScreen';
import CreateEventScreen from './src/CreateEventScreen';
import EventList from './src/EventList';
import FavoriteEventsScreen from './src/LandingPageScreen'; 
import PictureScreen from './src/PictureScreen';
import Chats from './src/Chats';

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
    Chats: Chats,
  },
  {
  initialRouteName: 'Home'  
  }
);

export default createAppContainer(AppNavigator);
