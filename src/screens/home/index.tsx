import React from 'react'
import {
  Button,
  Platform,
  Text,
  View,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

import i18n from '@/i18n'

import { styles } from './styles'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload, Cmd+D or shake for dev menu`,
  android:
    `Double tap R on your keyboard to reload,
    Shake or press menu button for dev menu`,
})

export interface OuterProps {
  navigation: any;
}

class HomeScreen extends React.Component<OuterProps, {}> {

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

  renderIcons = () => {
    return (
      <View>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => alert('facebook')}
        >
          Login with Facebook
        </Icon.Button>
        <Icon name="comments" size={30} color="#900" />
        <Icon name="comments" size={30} color="#900" solid />
        <Icon name="comments" size={30} color="#900" light />
      </View>
    )
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Text style={styles.welcome}>React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View>{this.renderIcons()}</View>

        <View><Text>{i18n.t('main.button.text')}</Text></View>
        <Button
          title="Add some friends"
          onPress={() => navigation.navigate('Friends')}
        />
      </View>
    )
  }
}

export default HomeScreen
