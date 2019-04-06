import React from 'react'
import { View, Text, Button} from 'react-native'


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button
          title="Create Event"
          onPress={() =>
            this.props.navigation.navigate('CreateEvent')
          }
        />
          <Button
          title="View Profile"
          onPress={() =>
            this.props.navigation.navigate('Profile')
          }
        />
        </View>
      );
    }
  }
export default HomeScreen;