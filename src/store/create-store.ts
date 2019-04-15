import { configure } from 'mobx'

import {
  STORE_UI,
  STORE_APP,
  STORE_DATA,
  STORE_SESSION,
} from '@/configs'

import {
  UiStore,
  AppStore,
  DataStore,
  SessionStore,
} from './providers'

configure({
  enforceActions: 'always', // 'never' | 'always' | 'observed'
})

export const createStore = (routerStore?: any) => {
  const {
    ui = {},
    app = {},
    data = {},
    session = {},
  } = {}

  return {
    [STORE_UI]: new UiStore(ui),
    [STORE_APP]: new AppStore(app),
    [STORE_DATA]: new DataStore(data),
    [STORE_SESSION]: new SessionStore(session),
  }
}
