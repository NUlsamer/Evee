import React from 'react'
import { View, Text, Button} from 'react-native'

class FavoriteEventsScreen extends React.Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Choose your favorite Events</Text>
                    <Button
                    title="Back"
                    onPress={() =>
                    this.props.navigation.goBack()
                    }
                    />
                    <Button
                    title="Continue"
                    onPress={() =>
                    this.props.navigation.navigate('Picture')
                    }
                    />
                    </View>
        );
    }
}

export default FavoriteEventsScreen;