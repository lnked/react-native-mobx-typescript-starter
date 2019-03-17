import React from 'react'
import { View, Text } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import {
  createAppContainer,
  createStackNavigator,
  // createSwitchNavigator,
} from 'react-navigation'

/* Screens */
import FriendsScreen from '@/screens/friends'
import HomeScreen from '@/screens/home'

const AppNavigator = createStackNavigator({
  Home: {
    screen: gestureHandlerRootHOC(HomeScreen),
  },
  Friends: {
    screen: gestureHandlerRootHOC(FriendsScreen),
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: '#f00',
    headerStyle: {
      backgroundColor: '#0f0',
    },
  },
})

export const AppContainer = createAppContainer(AppNavigator)
