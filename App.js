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
  TouchableHighlight
} from 'react-native'

export default class MovieListMiniApp extends Component {

  _keyExtractor = (item, index) => item.title;

  constructor () {
    super()
    this.state = {
      movies: [{
        title: 'The Fast and Furious',
        releaseYear: 2010,
        ratings: '4.5',
        imageUrl: 'http://bit.ly/2jRUZwE',
        description: 'The Fast and the Furious'
      }, {
        title: '2 Fast 2 Furious',
        releaseYear: 2011,
        ratings: '4.0',
        imageUrl: 'http://bit.ly/2jTfYPF',
        description: 'How fast do you like it ?'
      }]
    }
  }

  render () {
    return (
      <FlatList
        style={styles.container}
        data={this.state.movies}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) =>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={{
                uri: item.imageUrl ? item.imageUrl : 'http://bit.ly/2yz3AYe'
              }}
            />
            <View style={styles.row2}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.releaseYear}</Text>
            </View>
          </View>
        }
      />
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