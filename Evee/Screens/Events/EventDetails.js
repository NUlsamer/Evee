import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'

export default class EventDetails extends React.Component {
    state = { Organizer: '', EventID: '', Description: '', Location: '', EventName: '', Eventtags: [], errorMessage: null }
render() {

    const { navigation } = this.props;
    const EventID = navigation.getParam('EventID', 'NO-ID');
return (
    <View>
        <View>
            <Text>{this.state.EventName}</Text>
            <Text>{this.state.Description}</Text>
            <Text>Time</Text>
            <Text>EventID: {JSON.stringify(EventID)}</Text>
            </View>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Button
                title="Zur Karte"
                onPress={() =>
                this.props.navigation.navigate('Map')
                }
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button
                title="Details"
                onPress={() =>
                {this.props.navigation.navigate('Details', {EventID: this.state.EventID});
                }}
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button
                title="Teilnehmer"
                onPress={() =>
                {this.props.navigation.navigate('EventParticipants',{EventID: this.state.EventID});
                }}
            />
            </View>
        </View>
    </View>
);

}
}
const styles = StyleSheet.create({
    container: {
//        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
//        flex: 1,
    }
})
