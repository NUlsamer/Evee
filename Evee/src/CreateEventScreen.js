import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


class CreateEventScreen extends React.Component {
    
    render() {
        return (
            <View>
                <Text>Create Event Screen comes here</Text>
                <button title = "Go Back"
                    onpress={(this.props.navigation.navigate('Home'))}>
                </button>
            </View>
        );
    }
}

export default CreateEventScreen;