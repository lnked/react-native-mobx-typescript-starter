import React from 'react'
import {
  Button,
  Platform,
  Text,
  View,
} from 'react-native'

import i18n from '@/i18n'

import { styles } from './styles'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload, Cmd+D or shake for dev menu`,
  android:
    `Double tap R on your keyboard to reload,
    Shake or press menu button for dev menu`,
})

interface Props {
  navigation: any;
}

interface State {}

class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

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

export default HomeScreen
