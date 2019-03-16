import React from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

import i18n from '@/i18n'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload, Cmd+D or shake for dev menu`,
  android:
    `Double tap R on your keyboard to reload,
    Shake or press menu button for dev menu`,
})

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Text style={styles.welcome}>React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View><Text>{i18n.t('main.button.text')}</Text></View>
        <Button
          title='Add some friends'
          onPress={() => navigation.navigate('Friends')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
