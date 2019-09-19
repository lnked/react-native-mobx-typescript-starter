import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen, LoginScreen, DetailsScreen, QRScanner } from '@/screens';

import { stackNavigatorConfig } from './config';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Settings: {
      screen: QRScanner,
    },
    Details: {
      screen: DetailsScreen,
      // navigationOptions: {
      //   title: 'Details',
      // },
    },
  },
  {
    ...stackNavigatorConfig,
  }
);

// createStackNavigator({
//   drawer: createDrawerNavigator({
//     tabs: createBottomTabNavigator()
//   })
// })

export default createAppContainer(AppNavigator);
