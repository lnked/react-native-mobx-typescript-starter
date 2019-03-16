// @flow

import { NavigationActions } from 'react-navigation'

let navigator

export function setAppNavigator (navigatorRef: any) {
  navigator = navigatorRef
}

export function navigate (routeName: string, params: Object = {}) {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }))
}

export function dispatch (action: string | null) {
  navigator.dispatch(action)
}

export function goBack (key: string | null = null) {
  navigator.dispatch(NavigationActions.back({ key }))
}

export function state () {
  return navigator.state
}

export function createNavigateAction (routeName: string, action: string, params: any = {}) {
  return NavigationActions.navigate({ routeName, params, action })
}
