import * as React from 'react'
import SplashScreen from 'react-native-splash-screen'

import { observer, Provider } from 'mobx-react/native'

import { createStore } from '@/store'

// import i18n from '@/i18n'
import { isAndroid } from '@/configs'
import { AppContainer } from '@/routes/AppContainer'

const uriPrefix = isAndroid ? 'app://app/' : 'app://'

const navigation = React.createRef<any>()

@observer
class Core extends React.Component<{}, {}> {

  componentDidMount() {
    // store.appConfig.fetchAppConfig()
    SplashScreen.hide()
  }

  handleNavigationChange = (props: any) => {
    console.log('handleNavigationChange: ', props)
  }

  render () {
    return (
      <Provider {...createStore()}>
        <AppContainer
          ref={navigation}
          uriPrefix={uriPrefix}
          onNavigationStateChange={this.handleNavigationChange}
        />
      </Provider>
    )
  }

}

export default Core
