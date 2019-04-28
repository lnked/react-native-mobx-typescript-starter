import * as React from 'react'
import {
  StatusBar,
  Linking,
  View,
} from 'react-native'

import Core from '@/core'
import { Colors, CommonStyles } from '@/resources/styles'
import { handleDeepLinkUrl } from '@/utils'

class App extends React.Component<{}, {}> {

  componentDidMount() {
    this.initDeepLinks()
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL)
  }

  initDeepLinks = () => {
    Linking.addEventListener('url', this.handleOpenURL)
    Linking.getInitialURL().then(url => url && handleDeepLinkUrl(url))
  }

  handleOpenURL = (e: any) => {
    e && e.url && handleDeepLinkUrl(e.url)
  }

  render() {
    return (
      <View style={CommonStyles.flex}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.orange}
        />
        <Core />
      </View>
    )
  }

}

export default App
