import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

class ProfileScreen extends React.Component {
    
    render() {
        return (
        <View>
            <Text>Profilepic comes here</Text>
            <Text>Profilename</Text>
            <Text>Age</Text>
            <Button title = "See Profilename's Events"/>
            <Button
                title="Go Back"
                onPress={() =>
                this.props.navigation.navigate('Home')
                }
                />
        </View>
        );
    }
}

export default ProfileScreen;