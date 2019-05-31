import * as React from 'react'

// import { observer } from 'mobx-react'

// import { createStore } from '@/store'

// import i18n from '@/i18n'
import { isAndroid } from '@/configs'
import { AppContainer } from '@/routes/AppContainer'

const uriPrefix = isAndroid ? 'app://app/' : 'app://'

const navigation = React.createRef<any>()

// @observer
class Core extends React.Component<{}, {}> {

  componentDidMount() {
    // store.appConfig.fetchAppConfig()
  }

  handleNavigationChange = (props: any) => {
    console.log('handleNavigationChange: ', props)
  }
  render () {
    return (
      <AppContainer
        ref={navigation}
        uriPrefix={uriPrefix}
        onNavigationStateChange={this.handleNavigationChange}
      />
    )
  }

}

export default Core
