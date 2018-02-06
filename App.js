/**
 * @flow
 */

import React from 'react'
import Tabs from './src/Tabs'
import { View } from 'react-native'
import codePush from "react-native-code-push";

const fetchGoogle = () => HttpClientApi.requests().fetch('https://www.google.com', 'get')

class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'tomato'}}>
        <Tabs />
      </View>
    )
  }
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 2
})(App)