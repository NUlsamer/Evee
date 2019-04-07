import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from './ChatScreen';

export default class MainChatsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Chat',
          headerRight: (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress ={() => navigation.navigate('Settings')}>
                <Icon name="ios-settings" type='ionicon' size={30} style={{ marginRight: 15 }} color="rgb(49, 49, 49)" />
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => navigation.navigate('Profile')}>
                <Icon name="ios-person" type='ionicon' size={30} style={{ marginRight: 15 }} color="rgb(49, 49, 49)" />
            </TouchableOpacity>
           </View>
         ),
       }
    };
    render() {
        return <ChatScreen />;
    }
}