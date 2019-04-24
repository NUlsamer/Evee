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
            <View style = {styles.overlay}>
                <Card.Title style = {styles.header_one} title="Hausfeier" subtitle="XYZ Stadt"/>
                <Card.Content style= {styles.text}>
                <Paragraph style= {styles.textcolor}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
                <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Teilnehmen</Text></TouchableOpacity>
                <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Empfehlen</Text></TouchableOpacity>
            </Card.Actions>
            </View>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/253'}} style={styles.img}>    
            <View style = {styles.overlay}>
                <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph style= {styles.textcolor}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
            <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Teilnehmen</Text></TouchableOpacity>
                <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Empfehlen</Text></TouchableOpacity>
            </Card.Actions>
            </View>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/252'}} style={styles.img}>    
                
            <View style = {styles.overlay}>
            <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
            <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Teilnehmen</Text></TouchableOpacity>
                <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Empfehlen</Text></TouchableOpacity>
            </Card.Actions>
            </View>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/255'}} style={styles.img}>    
            <View style = {styles.overlay}>
                <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph style= {styles.textcolor}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
            <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Teilnehmen</Text></TouchableOpacity>
                <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Empfehlen</Text></TouchableOpacity>
            </Card.Actions>
            </View>
            </ImageBackground>
            </Card>
            <Card style={styles.card}>
            <ImageBackground source={{uri: 'https://picsum.photos/256'}} style={styles.img}>    
            <View style = {styles.overlay}>
                <Card.Title style = {styles.header} title="Hausfeier" subtitle="XYZ Stadt" />
                <Card.Content style= {styles.text}>
                    <Paragraph style= {styles.textcolor}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Paragraph>
                </Card.Content>
            
            <Card.Actions style= {styles.text}>
            <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Teilnehmen</Text></TouchableOpacity>
                <TouchableOpacity style= {styles.TouchableOpacity}>
                <Text style = {styles.textcolor}>Empfehlen</Text></TouchableOpacity>
            </Card.Actions>
            </View>
            </ImageBackground>
            </Card>
                    </ScrollView>
                    
        );
    }
    

}
const styles = StyleSheet.create({
    textcolor: {
        color: "#000000"
    },
    header: {
        transform: [{rotateZ: '5deg'}],
        margin: 4,
        marginLeft: 60,
        marginRight: 20,
        marginTop: 20,
        color: "#FFFFFF"
        },
    header_one: {
    transform: [{rotateZ: '5deg'}],
    margin: 4,
    marginLeft: 60,
    marginRight: 20,
    marginTop: 100,
    color: "#FFFFFF"
    },
    overlay: {
    backgroundColor: 'rgba(243, 241, 239, 0.55)'
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
        height: 230,
        transform: [ 
    {rotateZ: '-5deg'},
    {translateX: -30},
    {translateY: -100}
    ]
    },
    TouchableOpacity: {
        //änderung
        paddingRight: 10,
        paddingLeft: 10,
    },
    card_one: {
        width: Dimensions.get('window').width * 1.2,
        height: 310,
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
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold'

},
});

export default EventList;
