import React from 'react'
import { View, Text, Button} from 'react-native'


class LandingPageScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };  
  render() {
      return (


        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button title = "Create Event"
        onpress={(this.props.navigation.navigate('CreateEvent'))}>
        </Button>
        <Button title = "View Profile"
        onpress={(this.props.navigation.navigate('Profile'))}>
        </Button>
        </View>
      );
    }
  }
export default LandingPageScreen;