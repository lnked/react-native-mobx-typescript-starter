import { createStackNavigator } from 'react-navigation'

import stackNavigatorConfig from './config'

import OutdatedScreen from '@/screens/OutdatedScreen'


const OutdatedStack = createStackNavigator(
  {
    outdated: { screen: OutdatedScreen }
  },
  stackNavigatorConfig
)

export default OutdatedStack
