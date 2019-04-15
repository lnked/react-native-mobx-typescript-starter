import { AsyncStorage } from 'react-native'

// Retrieve value from AsyncStorage
export const retrieve = async (key: string) => await AsyncStorage.getItem(key)

// store
export const store = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, value)
}

// store multiple keys
export const storeCredentials = async (token: string, permissions: any) => {
  await AsyncStorage.multiSet([['token', token], ['permissions', JSON.stringify(permissions)]])
}

// Delete from AsyncStorage multiple keys
export const clearCredentials = async () => await AsyncStorage.multiRemove(['token', 'permissions'])
