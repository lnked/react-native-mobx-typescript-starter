import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'

import { name } from './app.json'

export const init = (enabled) => {
  if (!enabled) {
    return false
  }

  const { scriptURL } = NativeModules.SourceCode
  const host = scriptURL.split('://')[1].split(':')[0]

  Reactotron.configure({ name, host })
    .useReactNative()
    .connect()

  // Clear Reactotron on every time we load the app
  Reactotron.clear()

  const nativeLog = console.log

  console.log  = (...args) => {
    nativeLog(...args)

    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 1 ? JSON.stringify(args) : args[0],
    })
  }
}
