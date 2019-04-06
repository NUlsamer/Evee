import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SectionList, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


class EventList extends React.Component {
    render() {
        return (
            <ScrollView style={[styles.container, { backgroundColor: 'grey' }]}
                contentContainerStyle={styles.content}>
            <Card style={styles.card}>
                <Card.Title title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/250' }} />
            <Card.Actions>
                <Button>Teilnehmen</Button>
                <Button>Empfehlen</Button>
            </Card.Actions>
            </Card>
            <Card>
                <Card.Title title="Hausfeier2" subtitle="XYZ Stadt2" />
                <Card.Content>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Teilnehmen</Button>
                    <Button>Empfehlen</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
        );
    }
    

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 4,
    },
    card: {
        margin: 4,
    },
});

export default EventList;