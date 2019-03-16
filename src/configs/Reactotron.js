import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'

import { name } from './app.json'

export const init = (enabled) => {
  if (!enabled) {
    return false
  }

  const { scriptURL } = NativeModules.SourceCode
  const host = scriptURL.split('://')[1].split(':')[0]

  Reactotron.configure({
    name,
    host,
  })
    .useReactNative()
    .connect()

  // Clear Reactotron on every time we load the app
  Reactotron.clear()

  console.tron = Reactotron
}
