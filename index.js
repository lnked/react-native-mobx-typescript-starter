import { AppRegistry } from 'react-native'
import { App } from '@/app'
import { name as appName } from '@/configs/app.json'
import * as Reactotron from '@/configs/reactotron'

Reactotron.init(__DEV__)

AppRegistry.registerComponent(appName, () => App)
