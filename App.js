/**
 * @flow
 */

import React from 'react'
import Tabs from './src/Tabs'
import { View } from 'react-native'

const fetchGoogle = () => HttpClientApi.requests().fetch('https://www.google.com', 'get')

export default class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'tomato'}}>
        <Tabs />
      </View>
    )
  }
}