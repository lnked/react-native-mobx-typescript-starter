import { NavigationActions } from 'react-navigation';

let navigator: any;

export function setTopLevelNavigator (navigatorRef: any) {
  navigator = navigatorRef;
}

export function navigate (routeName: string, params: any = {}) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export function dispatch (action: string | null) {
  navigator.dispatch(action);
}

export function goBack (key: string | null = null) {
  navigator.dispatch(NavigationActions.back({ key }));
}

export function state () {
  return navigator.state;
}

export default {
  state,
  goBack,
  navigate,
  dispatch,
  setTopLevelNavigator,
};
