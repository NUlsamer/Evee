import React, {Component} from 'react';
//import * as React from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
import { Colors,  Appbar,  FAB,  Switch,  Paragraph,  withTheme} from 'react-native-paper';
import type { Theme } from 'react-native-paper/types';

type Props = {
  navigation: any,
  theme: Theme,
};

const initialParams = {
  showPopUp: true,
  showGroup: true,
  showAll: true,
  showNotification: true,
};

const MORE_ICON = Platform.OS === 'ios' ? 'more-horiz' : 'more-vert';

class Settings extends React.Component<Props> {
   static title = 'Settings';
   static navigationOptions = ({ navigation }) => {
        const params = { ...initialParams, ...navigation.state.params };
        return {
            header: (
                <Appbar.Header style={styles.header}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Appbar.Content title="Settings" />
                </Appbar.Header>
            ),
        };
    };

    render() {
        const {
            navigation,
            theme: {
                colors: { background },
            },
        } = this.props;
    const params = { ...initialParams, ...navigation.state.params };

        return (
          <View style={[
              styles.container,
              {
                backgroundColor: background,
              },
            ]}
          >
            <View style={styles.row}>
              <Paragraph>Show PopUp Chat</Paragraph>
              <Switch
                value={params.showPopUp}
                onValueChange={value =>
                  navigation.setParams({
                    showPopUp: value,
                  })
                }
              />
            </View>
            <View style={styles.row}>
              <Paragraph>Show Group Chat</Paragraph>
              <Switch
                value={params.showGroup}
                onValueChange={value =>
                  navigation.setParams({
                    showGroup: value,
                  })
                }
              />
            </View>
            <View style={styles.row}>
              <Paragraph>Show All Chat</Paragraph>
              <Switch
                value={params.showAll}
                onValueChange={value =>
                  navigation.setParams({
                    showAll: value,
                  })
                }
              />
            </View>
            <View style={styles.row}>
               <Paragraph>Enable Notifications</Paragraph>
                <Switch
                  value={params.showNotification}
                  onValueChange={value =>
                  navigation.setParams({
                    showNotification: value,
                  })
                  }
                />
             </View>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      header: {
        backgroundColor: Colors.white
      },
      container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 8,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
      fab: {
        position: 'absolute',
        right: 16,
        bottom: 28,
      },
    });

export default withTheme(Settings);



