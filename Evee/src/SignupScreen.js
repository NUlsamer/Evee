import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {
state = { email: '', password: '', errorMessage: null }

handleSignUp = () => {
    const { email, password } = this.state
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
}
// username, homelocation and date of birth has to send to firebase  
// see https://www.firebase.com/docs/web/guide/user-auth.html#section-storing for more infos
// datepicker has to be implemented
// maybe also implement google and fb auth next
render() {
    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
            </Text>}
            <TextInput
                placeholder="Enter Email here"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
            />
            <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            />
                    <TextInput
        autoCapitalize="none"
        placeholder="Username (does nothing right now)"
        style={styles.textInput}
        value={this.state.Username}
        />
        <TextInput
        autoCapitalize="none"
        placeholder="Homelocation (does nothing right now)"
        style={styles.textInput}
        value={this.state.Homelocation}
        />
            <Button title="Sign Up" onPress={this.handleSignUp} />
            <Button
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate('Login')}
            />
        </View>
    )
}

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})
