import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class EventList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'Subscribed Events', data: [
                        'Event 1', 'Event 2'
                        ]},
                        {title: 'Other Events', data: [
                            'Event 1', 'Event 2', 'Event 3']},
                    ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
            </View>
        );
    }
    

}