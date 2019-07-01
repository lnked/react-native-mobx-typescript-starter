import { AppRegistry, YellowBox } from 'react-native'

import * as Reactotron from './reactotron-config'
import { name as appName } from './app.json'
import AppContainer from '@/app'

// YellowBox.ignoreWarnings([
//   'Module RCTImageLoader requires',
//   'Warning: componentWillMount is deprecated',
//   'Warning: componentWillReceiveProps is deprecated',
//   'Warning: isMounted(...) is deprecated',
// ])

// console.disableYellowBox = true

Reactotron.init(__DEV__)
AppRegistry.registerComponent(appName, () => AppContainer)
