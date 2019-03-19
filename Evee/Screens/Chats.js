import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';


class Chats extends React.Component {
    
    render() {
        return(
        <View>
        <Text>Your Main Chats</Text>
        </View>
        )
    }
    

}

class PopUpChats extends React.Component {
render() {
    return(
        <View>
        <Text>Your PopUpChats</Text>
        </View>
        )
}

}

class GroupChats extends React.Component {
    render() {
        return(
            <View>
            <Text>Your Group Chats</Text>
            </View>
            )
    }
}

const TabNavigator = createMaterialTopTabNavigator (
{
    Chats: Chats,
    PopUpChats: PopUpChats,
    GroupChats: GroupChats,
}
)

export default createAppContainer(TabNavigator);