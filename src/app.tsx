import * as React from 'react'
import { Linking, StatusBar, View } from 'react-native'

import Core from '@/core'
import { CommonStyles } from '@/resources/styles'
import { handleDeepLinkUrl } from '@/utils'

export class App extends React.Component<{}, {}> {

  componentDidMount() {
    this.initDeepLinks()
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL)
  }

  initDeepLinks = () => {
    Linking.addEventListener('url', this.handleOpenURL)
    Linking.getInitialURL().then((url: string) => url && handleDeepLinkUrl(url))
  }

  handleOpenURL = (e: any) => {
    e && e.url && handleDeepLinkUrl(e.url)
  }

  render() {
    return (
      <View style={CommonStyles.flex}>
        <StatusBar barStyle="dark-content" />
        <Core />
      </View>
    )
  }

}
