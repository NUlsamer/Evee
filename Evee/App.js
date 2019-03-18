import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//import screens
import LandingPageScreen from './Screens/LandingPageScreen';
import Login from './Screens/LoginScreen';
import SignUp from './Screens/SignupScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CreateEventScreen from './Screens/CreateEventScreen';
import EventList from './Screens/EventList';
import FavoriteEventsScreen from './Screens/LandingPageScreen'; 
import PictureScreen from './Screens/PictureScreen';
import Chats from './Screens/Chats';

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
