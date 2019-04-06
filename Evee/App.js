import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { 
  createMaterialTopTabNavigator,
  createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator,
  createBottomTabNavigator} from 'react-navigation';

//import screens
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/LoginScreen';
import SignUp from './Screens/SignUp/SignupScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CreateEventScreen from './Screens/CreateEventScreen';
import EventList from './Screens/EventListScreen';
import FavoriteEventsScreen from './Screens/SignUp/FavoriteEventsScreen'; 
import PictureScreen from './Screens/SignUp/PictureScreen';
import MainChatsScreen from './Screens/Chats/MainChatsScreen';
import PopUpChatsScreen from './Screens/Chats/PopUpChatsScreen';
import GroupChatsScreen from './Screens/Chats/GroupChatsScreen';
import LandingPageScreen from './Screens/LandingPageScreen';
import EventDetails from './Screens/Events/EventDetails';
import EventParticipants from './Screens/Events/EventParticipants';

const AppNavigator = createStackNavigator ( 
  {
    Home: HomeScreen,
    CreateEvent: CreateEventScreen,
    Profile: ProfileScreen,
    EventList: EventList,
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

const ChatNav = createMaterialTopTabNavigator (
  {
      Chats: MainChatsScreen,
      PopUpChats: PopUpChatsScreen,
      GroupChats: GroupChatsScreen,
  },
  {
  initialRouteName: 'Chats'
  }
  )
const HomeNav = 
createBottomTabNavigator(
  {
    Home: {screen: AppNavigator},
    List: {screen: EventList},
    Chats: {screen: ChatNav},
  },{
  initialRouteName: 'Home'}
  
  )
export default createAppContainer(createSwitchNavigator( 
  { 
  Home: HomeNav,
  SignUp: SignUpNavigator,
Login: LoginNavigator}, 
    {
      //hier abfrage mit ? ob user eingeloggt ist
      initialRouteName: 'SignUp'
}),
  );
