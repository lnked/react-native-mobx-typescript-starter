import { createSwitchNavigator, createAppContainer } from 'react-navigation'

/* Stacks */
import AppStack from '@/navigator/stacks/AppStack'
import AuthStack from '@/navigator/stacks/AuthStack'
import OutdatedStack from '@/navigator/stacks/OutdatedStack'

const MainStack = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
  Outdated: OutdatedStack
}, {
  initialRouteName: 'Auth'
})

export default createAppContainer(MainStack)
