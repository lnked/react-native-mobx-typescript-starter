import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from 'screens';

const stackNavigatorConfig = {
  initialRouteName: 'Home',
};

const AppNavigator = createStackNavigator({
  Demo: HomeScreen,
  Home: {
    screen: HomeScreen,
  },
  Details: HomeScreen,
}, stackNavigatorConfig);

export default createAppContainer(AppNavigator);

// import { AppContainer } from 'AppContainer';

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
