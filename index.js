import { AppRegistry, YellowBox } from 'react-native'
import { App } from '@/app'
import { name as appName } from './app.json'
import * as Reactotron from './reactotron-config'

YellowBox.ignoreWarnings([
  'Module RCTImageLoader requires',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted(...) is deprecated',
])

Reactotron.init(__DEV__)

AppRegistry.registerComponent(appName, () => App)
