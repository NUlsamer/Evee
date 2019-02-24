import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'react-native-firebase';
import SignUp from './signup';

class ProfileScreen extends React.Component {
    signOut = async () => {
        try {
            await firebase.auth().signOut();
            //doesnt navigate for now, has to be evaluated further
            navigate(SignUp);
        } catch (error){
            console.log(error);
        }
    }
    
    render() {
        const user = firebase.auth().currentUser;

        return (
        <View>
            <Text>Profilepic comes here</Text>
            <Text>Profilename: {user.displayName}</Text>
            <Text>Emailadress: {user.email}</Text>
            <Text>Age</Text>
            <Button 
                title = {user.email}
                onPress={() =>
                this.props.navigation.navigate('Home')
                }/>
            <Button title="Sign out" onPress={this.signOut} />

        </View>
        );
    }
}

export default ProfileScreen;