import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';


class CreateEventScreen extends React.Component {
    state = {Description: '', Location: '', EventName: '', Eventtags: [], errorMessage: null }
//Datepicker has to be implemented
    render() {
        return (
            <View>
                <Text>Create Event Screen comes here</Text>
                <TextInput
                    autoCapitalize="none"
                    placeholder="EventName"
                    onChangeText={EventName => this.setState({ EventName })}
                    value={this.state.EventName}
                />
                <TextInput
                    autoCapitalize="none"
                    placeholder="Location"
                    onChangeText={Location => this.setState({ Location })}
                    value={this.state.Location}
                />
                <TextInput
                    autoCapitalize="none"
                    placeholder="Beschreibung"
                    onChangeText={Description => this.setState({ Description })}
                    value={this.state.Description}
                />
                <Button
                    title="CreateEvent" //does nothing right now, except navigating to eventlist, here comes navigation to the created event(prbly by id)
                    onPress={() =>
                        this.props.navigation.navigate('EventList')
                    }
        />
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

export default CreateEventScreen;