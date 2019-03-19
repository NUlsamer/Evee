import React from 'react'
import { View, Text, Button} from 'react-native'

class LandingPageScreen extends React.Component{

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Evee</Text>
                    <Button
                        title="Login"
                        onPress={() =>
                        this.props.navigation.navigate('Login')
                        }
                    />
                    <Button
                        title="SignUp"
                        onPress={() =>
                        this.props.navigation.navigate('SignUpNav')
                        }
                    />
            </View>
        );
    }
}

export default LandingPageScreen;