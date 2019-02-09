import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


class CreateEventScreen extends React.Component {
    
    render() {
        return (
            <View>
                <Text>Create Event Screen comes here</Text>
                <Button title = "Go Back"
                    onpress={(this.props.navigation.navigate('Home'))}>
                </Button>
            </View>
        );
    }
}

export default CreateEventScreen;