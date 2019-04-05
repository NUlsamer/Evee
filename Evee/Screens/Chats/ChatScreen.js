import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


class ChatScreen extends React.Component{

    state = {messages: [],};

    get User(){
    //read out user here
    }
    onSend(messages = []) {
        this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    
    render() {
        return (
        <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={this.user}
        />
        );
    }
    

}

export default ChatScreen;