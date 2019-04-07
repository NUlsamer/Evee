import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class MainChatsScreen extends React.Component {


static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Chat',
      headerRight: (
        <TouchableOpacity onPress ={() => navigation.navigate('Settings')} style={{ marginRight: 10 }}>
            <View>
                <Icon name="ios-settings" type='ionicon' size={30} color="rgb(49, 49, 49)" />
            </View>
        </TouchableOpacity>
     ),
   }
};

    render() {
        return(
        <View>
        <Text>Your Chats</Text>
        </View>
        )
    }
    

}

export default MainChatsScreen;