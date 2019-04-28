import React from 'react'
import { View, Image, Text } from 'react-native'

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
    screen: HomeScreen,
  },
  Friends: {
    screen: FriendsScreen,
  },
},                                        {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: '#f00',
    headerStyle: {
      backgroundColor: '#0f0',
    },
  },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

export const AppContainer = createAppContainer(AppNavigator)
