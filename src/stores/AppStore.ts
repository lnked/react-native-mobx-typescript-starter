import { observable, action, computed } from 'mobx';

import { initialRouteName } from '@/configs';

class AppStore {
  @observable route: string = initialRouteName;

  @computed get getRoute () {
    return this.route;
  }

  @action
  setRoute = (route: string) => {
    this.route = route;
  }
}

export default AppStore;

// export const getCurrentRoute = (state: Object) => {
//   const findCurrentRoute = (navState: Object) => {
//     if (navState.index !== undefined) {
//       return findCurrentRoute(navState.routes[navState.index])
//     }
//     return navState.routeName
//   }
//   return findCurrentRoute(state.nav)
// }

// // gets the current screen from navigation state
// function getActiveRouteName(navigationState) {
//   if (!navigationState) {
//     return null;
//   }
//   const route = navigationState.routes[navigationState.index];
//   // dive into nested navigators
//   if (route.routes) {
//     return getActiveRouteName(route);
//   }
//   return route.routeName;
// }

// const AppNavigator = createStackNavigator(AppRouteConfigs);
// const AppContainer = createAppContainer(AppNavigator);

// export default () => (
//   <AppContainer
//     onNavigationStateChange={(prevState, currentState, action) => {
//       const currentScreen = getActiveRouteName(currentState);
//       const prevScreen = getActiveRouteName(prevState);

//       if (prevScreen !== currentScreen) {
//         // the line below uses the Google Analytics tracker
//         // change the tracker here to use other Mobile analytics SDK.
//         tracker.trackScreenView(currentScreen);
//       }
//     }}
//   />
// );
