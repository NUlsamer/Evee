import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import firebase from 'react-native-firebase';
import SignUp from './SignUp/SignupScreen';

class ProfileScreen extends React.Component {
/*    signOut = async () => {
        try {
            await firebase.auth().signOut();
            //doesnt navigate for now, has to be evaluated further
            navigate(SignUp);
        } catch (error){
            console.log(error);
        }
    }
*/  
    render() {
//        const user = firebase.auth().currentUser;

        return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 300,  height: 320 }} source={{ uri: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }} />
            <Text>Profilepic comes here</Text>
            <Text>Profilename: </Text>
            <Text>Emailadress: </Text>
            <Text>Age</Text>
            <Button title="Sign out" onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
        );
    }
}

export default ProfileScreen;