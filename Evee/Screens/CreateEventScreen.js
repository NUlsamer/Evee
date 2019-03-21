import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    DatePickerAndroid, 
    TimePickerAndroid,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


class CreateEventScreen extends React.Component {
    state = {Description: '', Location: '', EventName: '', Eventtags: [], errorMessage: null }
//Datepicker has to be implemented
constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
    chosenDate: new Date(),
    chosenAndroidTime: '00:00',
    androidDate: `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getUTCFullYear()}`,
    value: 50,
    Description: '',
    Location: '',
    EventName: '',
    Eventtags: [],
    errorMessage: null,
    EventID: '1',
    };
}

setDate(newDate) {
    this.setState({ chosenDate: newDate });
}

setDateAndroid = async () => {
    try {
    const {
        action, year, month, day,
    } = await DatePickerAndroid.open({
    date: new Date(),
    minDate: new Date(),
    });
    if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ androidDate: `${day}/${month + 1}/${year}` });
    }
    } catch ({ code, message }) {
    console.warn("Couldn't open Datepicker", message);
    }
};
setTimeAndroid = async () => {
    try {
    const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 0,
        minute: 0,
        is24Hour: true, 
    });
    if (action !== TimePickerAndroid.dismissedAction) {
        const m = (minute < 10) ? `0${minute}` : minute;
        const h = (hour < 10) ? `0${hour}` : hour;
        this.setState({ chosenAndroidTime: `${h}:${m}` });
    }
    } catch ({ code, message }) {
    console.warn('Cannot open time picker', message);
    }
};
    render() {
        return (
            <View>
                <Text>Create your own Event!</Text>
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
            <TouchableOpacity onPress={() => this.setDateAndroid()}>
                <View>
                <Icon name="ios-calendar" size={25} color="rgb(49, 49, 49)" />
                <Text>
                    {this.state.androidDate}
                </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setTimeAndroid()}>
                <View>
                <Icon name="ios-time" size={25} color="rgb(49, 49, 49)" />
                <Text>
                    {this.state.chosenAndroidTime}
                </Text>
                </View>
            </TouchableOpacity>

                <Button
                    title="CreateEvent" //does nothing right now, except navigating to eventlist, here comes navigation to the created event(prbly by id)
                    onPress={() =>
                        this.props.navigation.navigate('EventDetails', {EventID: this.state.EventID} )
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