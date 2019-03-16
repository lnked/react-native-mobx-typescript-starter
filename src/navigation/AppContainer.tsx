import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { createStackNavigator, createAppContainer } from 'react-navigation'
// import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Friends from '@/screens/friends'
import Home from '@/screens/home'

// /* Stacks */
// import AppStack from '@/navigator/stacks/AppStack'
// import AuthStack from '@/navigator/stacks/AuthStack'
// import OutdatedStack from '@/navigator/stacks/OutdatedStack'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Friends: {
    screen: Friends,
  },
  // Home: { screen: gestureHandlerRootHOC(Home) },
  // Friends: { screen: gestureHandlerRootHOC(Friends) },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    tabBarLabel: 'Home!',
    headerTintColor: '#f00',
    headerStyle: {
      backgroundColor: '#0f0',
    },
  },

  // defaultNavigationOptions: {
  //   headerTintColor: '#fff',
  //   headerStyle: {
  //     backgroundColor: '#000',
  //   },
  // },
  // navigationOptions: {
  //   header: null,
  //   tabBarLabel: 'Home!',
  // },
  // initialRouteName: 'Home',
  // defaultNavigationOptions: {
  //   headerTintColor: '#fff',
  //   headerStyle: {
  //     backgroundColor: '#000',
  //   },
  // },
})

export default createAppContainer(AppNavigator)
