import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

//import screens
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/LoginScreen';
import SignUp from './Screens/SignUp/SignupScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CreateEventScreen from './Screens/CreateEventScreen';
import EventList from './Screens/EventList';
import FavoriteEventsScreen from './Screens/SignUp/FavoriteEventsScreen'; 
import PictureScreen from './Screens/SignUp/PictureScreen';
import Chats from './Screens/Chats';
import LandingPageScreen from './Screens/LandingPageScreen';
import EventDetails from './Screens/Events/EventDetails';
import EventParticipants from './Screens/Events/EventParticipants';


const AppNavigator = createStackNavigator ( 
  {
    Home: HomeScreen,
    CreateEvent: CreateEventScreen,
    Profile: ProfileScreen,
    Login: Login,
    EventList: EventList,
    Chats: Chats,
  },
  {
  initialRouteName: 'Home'  
  }
);
const LoginNavigator = createStackNavigator (
{
LoginNav: Login,
},
{
  initialRouteName: 'LoginNav'
}
)
const SignUpNavigator = createStackNavigator (
{
  LandingPage: LandingPageScreen,
  SignUpNav: SignUp,
  FavoriteEvents: FavoriteEventsScreen,
  Picture: PictureScreen
},
{
  initialRouteName: 'LandingPage'
}
);

const EventNav = createStackNavigator (
{
  EventDetails: EventDetails,
  EventParticipants: EventParticipants,
}

)

export default createAppContainer(createSwitchNavigator( 
  { 
    SignUp: SignUpNavigator, 
    App: AppNavigator,
    Login: LoginNavigator,
    Events: EventNav,
  }, 
    {
      initialRouteName: 'SignUp'
}));
