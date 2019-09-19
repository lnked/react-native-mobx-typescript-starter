import * as React from 'react';
import { observer } from 'mobx-react';

import { configureStore } from '@/stores';

@observer
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
