// import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import {
  createAppContainer,
  createStackNavigator,
  // createSwitchNavigator,
} from 'react-navigation'

/* Screens */
import Friends from '@/screens/friends'
import Home from '@/screens/home'

const Navigator = createStackNavigator({
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
})

export const AppContainer = createAppContainer(Navigator)
