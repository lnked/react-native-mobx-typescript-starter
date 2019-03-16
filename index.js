import { AppRegistry } from 'react-native'
import { App } from './src/app'
import { name as appName } from './src/configs/app.json'
import './src/configs/Reactotron'

AppRegistry.registerComponent(appName, () => App)
