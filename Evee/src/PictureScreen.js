import React from 'react'
import { View, Text, Button} from 'react-native'

class PictureScreen extends React.Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Take a Picture or choose one from your phone for your profile!</Text>
                    <Button
                    title="Back"
                    onPress={() =>
                    this.props.navigation.goBack()
                    }
                    />
                    <Button
                    title="Continue"
                    onPress={() =>
                    this.props.navigation.navigate('LandingPage')
                    }
                    />
                    </View>
        );
    }
}