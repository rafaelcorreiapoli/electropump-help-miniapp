/**
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  Button
} from 'react-native'
import { HttpClientApi} from 'electropump-http-client-api'
import { StackNavigator } from 'react-navigation'

const fetchGoogle = () => HttpClientApi.requests().fetch('https://www.google.com', 'get')

class FetchTestScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bodyOur: '',
      bodyOriginal: '',
    }
  }

  handlePress = async () => {
    const ourFetch = async () => {
      const data = await fetchGoogle()
      const body = data.body
      this.setState({
        bodyOur: body
      })
    }

    const originalFetch = async () => {
      const data = await fetch('https://www.google.com')
      const body = await data.text()
      this.setState({
        bodyOriginal: body
      })
    }

    Promise.all([ourFetch(), originalFetch()]) 
  }

  handleRestart = () => {
    this.setState({
      bodyOur: '',
      bodyOriginal: '',
    })
  }
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'tomato'}}>
        <Text>
          HelpMiniApp
        </Text>
        <View style={{flex:1, flexDirection: 'row'}}>
          <Text style={{flex: 1}}>
            {this.state.bodyOur ? this.state.bodyOur : 'Our fetch'}
          </Text>
          <Text style={{flex: 1}}>
            {this.state.bodyOriginal ? this.state.bodyOriginal : 'Original fetch'}
          </Text>
        </View>
        
        <Button
         onPress={this.handlePress}
         title="FETCH"
        />
        <Button
         onPress={this.handleRestart}
         title="RESTART"
         color='red'
        />
      </View>
    )
  }
}

export default StackNavigator({
  FetchTest: { screen: FetchTestScreen },
});
