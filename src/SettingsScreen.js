import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SettingsScreen extends React.Component {
  handlePress = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button
          onPress={this.handlePress}
          title="POP"
        />
      </View>
    );
  }
}