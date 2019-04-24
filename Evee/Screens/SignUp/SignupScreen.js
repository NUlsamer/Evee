import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native'
import { Button,  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase'
import LinearGradient from 'react-native-linear-gradient';

export default class SignUp extends React.Component {
state = { email: '', password: '', errorMessage: null }

/*handleSignUp = () => {
    const { email, password } = this.state
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
}*/
// username, homelocation and date of birth has to send to firebase  
// see https://www.firebase.com/docs/web/guide/user-auth.html#section-storing for more infos
// datepicker has to be implemented
// maybe also implement google and fb auth next
render() {
    return (
        <View>
        <LinearGradient colors={['#1998e8',  '#075a8e']} style={styles.container}>
            <Text style={styles.heading}>CREATE ACCOUNT</Text>
            {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
            </Text>}
            <View style={styles.textInputContainer}>
                <View style={styles.textInputAndIcon}>
                <Icon name='ios-mail' type='ionicon' size={23} color='rgb(49, 49, 49)' style={styles.icon} />
                <TextInput mode='outlined'
                    style={styles.textInput}
                    placeholder='Email'
                    placeholderTextColor='white'
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                </View>
                <View style={styles.textInputAndIcon}>
                <Icon name='md-key' type='ionicon' size={23} color='rgb(49, 49, 49)' style={styles.icon} />
                <TextInput mode='outlined'
                    style={styles.textInput}
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor='white'
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                </View>
                <View style={styles.textInputAndIcon}>
                <Icon name='md-contact' type='ionicon' size={23} color='rgb(49, 49, 49)' style={styles.icon} />
                <TextInput mode='outlined'
                    style={styles.textInput}
                    autoCapitalize='none'
                    placeholder='Username'
                    placeholderTextColor='white'
                    onChangeText = {Username => this.setState({ Username })}
                    value={this.state.Username}
                />
                </View>
                <View style={styles.textInputAndIcon}>
                <Icon name='md-pin' type='ionicon' size={23} color='rgb(49, 49, 49)' style={{paddingLeft: 17}} />
                <TextInput mode='outlined'
                    style={styles.textInputPin}
                    autoCapitalize='none'
                    placeholderTextColor='white'
                    placeholder='Homelocation'
                    onChangeText = {Homelocation => this.setState({ Homelocation })}
                    value={this.state.Homelocation}
                />
                </View>
            </View>
            <Button color='#FFFFFF'   onPress={() => this.props.navigation.navigate('FavoriteEvents')} style={styles.buttons}>Sign Up</Button>
            <Button color='#FFFFFF' onPress={() => this.props.navigation.navigate('Login')}>Already have an account? Login</Button>
        </LinearGradient>

        </View>
    )
}

}
const styles = StyleSheet.create({
     container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInputContainer: {
        width: '90%',
    },
    textInputAndIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 35,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 12,
        borderRadius: 35,
        color: '#FFFFFF',
    },
    textInputPin: {
         flex: 1,
         paddingHorizontal: 14,
         borderRadius: 35,
         color: '#FFFFFF',
    },
    icon: {
        paddingLeft: 15
    },
    heading: {
        color: '#FFFFFF',
        marginTop: '15%',
        marginBottom: 15,
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 5
    },
    buttons: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        borderRadius: 35,
        height: 50,
        width: '90%',
    }
})
