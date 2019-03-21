import React from 'react'
import { View, Text, Button} from 'react-native'

class EventParticipants extends React.Component {

render() {
    const { navigation } = this.props;
    const EventID = navigation.getParam('EventID', 'NO-ID');
    
    return(
        <View>
            <Text>Participants come here</Text>
            <Text>{this.EventID}</Text>
        </View>
);
}
}

export default EventParticipants;