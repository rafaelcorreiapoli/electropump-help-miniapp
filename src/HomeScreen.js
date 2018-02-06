import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SettingsScreen from './SettingsScreen'
class HomeScreen extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('Settings')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={this.handlePress}
          title="PUSH SETTINGS SCREEN"
        />
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
});