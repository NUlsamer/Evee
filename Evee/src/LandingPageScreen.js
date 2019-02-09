import React from 'react'
import { View, Text } from 'react-native'


class LandingPageScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };  
  render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <button title = "Create Event"
        onpress={(this.props.navigation.navigate('CreateEvent'))}>
        </button>
        <button title = "View Profile"
        onpress={(this.props.navigation.navigate('Profile'))}>
        </button>
        </View>
      );
    }
  }
export default LandingPageScreen;