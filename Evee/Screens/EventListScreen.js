import React, {Component} from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View, SectionList, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';


class EventList extends React.Component {

    render() {
        return (
            
            <ScrollView style={[styles.container, { backgroundColor: 'grey' }]}
                contentContainerStyle={styles.content}>
            
            <Searchbar 
            placeholder = "Search Events"
            />
            
            
            <Card style={styles.card_one}>
            <ImageBackground source={{uri: 'https://picsum.photos/250'}} style={styles.img}>    
                <Card.Title style = {styles.header_one} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
                <Button>Teilnehmen</Button>
                <Button>Empfehlen</Button>
            </Card.Actions>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/253'}} style={styles.img}>    
                <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
                <Button>Teilnehmen</Button>
                <Button>Empfehlen</Button>
            </Card.Actions>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/252'}} style={styles.img}>    
                <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
                <Button>Teilnehmen</Button>
                <Button>Empfehlen</Button>
            </Card.Actions>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/255'}} style={styles.img}>    
                <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
                <Button>Teilnehmen</Button>
                <Button>Empfehlen</Button>
            </Card.Actions>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/256'}} style={styles.img}>    
                <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
                <Button>Teilnehmen</Button>
                <Button>Empfehlen</Button>
            </Card.Actions>
            </ImageBackground>
            </Card>
                    </ScrollView>
                    
        );
    }
    

}
const styles = StyleSheet.create({
    header: {
        transform: [{rotateZ: '5deg'}],
        margin: 4,
        marginLeft: 60,
        marginRight: 20,
        marginTop: 20,
        },
    header_one: {
    transform: [{rotateZ: '5deg'}],
    margin: 4,
    marginLeft: 60,
    marginRight: 20,
    marginTop: 100,
    },
    img: {
        width: '100%', 
        height: '100%',
        },
        container: {
        flex: 1,
    },
    content: {
        padding: 4,
    },
    card: {
        width: Dimensions.get('window').width * 1.2,
        height: 240,
        transform: [ 
    {rotateZ: '-5deg'},
    {translateX: -30},
    {translateY: -100}
    ]
    },
    card_one: {
        width: Dimensions.get('window').width * 1.2,
        height: 320,
        transform: [
    {rotateZ: '-5deg'},
    {translateX: -30},
    {translateY: -100}
    ]
    },
    text: {
    transform: [{rotateZ: '5deg'}],
    margin: 4,
    marginLeft: 50,
    marginRight: 20,

}
});

export default EventList;
