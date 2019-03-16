import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'

import { name } from './app.json'

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode
  const scriptHostname = scriptURL.split('://')[1].split(':')[0]

  Reactotron.configure({ name, host: scriptHostname })
    .useReactNative()
    .connect()

  // Clear Reactotron on every time we load the app
  Reactotron.clear()

  console.tron = Reactotron
}
