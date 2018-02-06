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

const fetchGoogle = () => HttpClientApi.requests().fetch('https://www.google.com', 'get')

export default class MovieListMiniApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: ''
    }
  }

  handlePress = async () => {
    const data = await fetchGoogle()
    const body = data.body
    this.setState({
      body
    })
  }
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'tomato'}}>
        <Text>
          HelpMiniApp
        </Text>
        <Text style={{flex: 1}}>
          {this.state.body ? this.state.body : 'Waiting...'}
        </Text>
        <Button
         onPress={this.handlePress}
         title="FETCH"
        />
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 5,
    backgroundColor: 'black'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12
  },
  row2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    paddingTop: 5,
    flex: 1,
    fontSize: 12
  },
  icon: {
    width: 50,
    height: 70,
    flexShrink: 1,
    alignSelf: 'center'
  }
})