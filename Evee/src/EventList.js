import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SectionList} from 'react-native';

class EventList extends React.Component {
    render() {
        return (
            <View>
                <SectionList
                    sections={[
                        {title: 'Subscribed Events', data: [
                        'Event 1', 'Event 2'
                        ]},
                        {title: 'Other Events', data: [
                            'Event 1', 'Event 2', 'Event 3']},
                    ]}
                renderItem={({item}) => <Text>{item}</Text>}
                renderSectionHeader={({section}) => <Text>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
            </View>
        );
    }
    

}

export default EventList;