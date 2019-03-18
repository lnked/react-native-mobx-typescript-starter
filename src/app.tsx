import React, { Component } from 'react'
import {
  Linking,
  Platform,
  StatusBar,
  Text,
  View,
} from 'react-native'

import i18n from '@/i18n'
import { AppContainer } from '@/routes/AppContainer'
import { CommonStyles } from '@/resources/styles'

import FriendsScreen from '@/screens/friends'
import HomeScreen from '@/screens/home'

interface Props {}
interface State {}

const uriPrefix = Platform.OS === 'android' ? 'app://app/' : 'app://'

const handleDeepLinkUrl = (url: string) => alert(url)

export class App extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.initDeepLinks()
  }

  navigation = null

  initDeepLinks = () => {
    Linking.addEventListener('url', this.handleOpenURL)

    Linking.getInitialURL().then((url: string) => {
      if (url) {
        handleDeepLinkUrl(url)
      }
    })
  }

  handleOpenURL = (event: any) => {
    if (event && event.url) {
      handleDeepLinkUrl(event.url)
    }
  }

  handleNavigationChange = (props: any) => {
    console.log('handleNavigationChange: ', props)
  }

  setAppNavigator = (ref: any) => {
    this.navigation = ref
  }

  render() {
    return (
      <View style={CommonStyles.flex}>
        <StatusBar barStyle='dark-content' />

        <AppContainer
          ref={this.setAppNavigator}
          uriPrefix={uriPrefix}
          onNavigationStateChange={this.handleNavigationChange}
        />
      </View>
    )
  }
}
