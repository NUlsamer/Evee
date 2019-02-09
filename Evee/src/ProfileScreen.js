import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

class ProfileScreen extends React.Component {
    
    render() {
        return (
        <View>
            <Text>Profile comes here</Text>
            <Button title = "Go Back"
                onpress={(this.props.navigation.navigate('Home'))}>
            </Button>
        </View>
        );
    }
}

export default ProfileScreen;