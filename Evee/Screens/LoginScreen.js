/*import React from 'react'
import { View, Text, Button} from 'react-native'


class Login extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };  
  render() {
      return (
        <View>
            <Text>LoginScreen</Text>
        </View>
      );
    }
  }
export default Login
*/
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class Login extends React.Component {
  state = { Homelocation: '', Username: '', email: '', password: '', errorMessage: null }

/*  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
*/
  render() {
    return (
      <View>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUpNav')}
        />
      </View>
    )
  }
}
