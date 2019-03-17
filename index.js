import { AppRegistry } from 'react-native'
import { App } from '@/app'
import { name as appName } from './app.json'
import * as Reactotron from './reactotron'

Reactotron.init(__DEV__)

AppRegistry.registerComponent(appName, () => App)
