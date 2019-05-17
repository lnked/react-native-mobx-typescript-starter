import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const deviceWidth = width
export const deviceHeight = height

// import {Platform, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//       ios: {
//         backgroundColor: 'red',
//       },
//       android: {
//         backgroundColor: 'blue',
//       },
//     }),
//   },
// });

const permissionTypes = {
  location: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  camera: PermissionsAndroid.PERMISSIONS.CAMERA,
  microphone: PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  contacts: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  event: PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
  storage: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, // - here
  photo: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, // - here
  callPhone: PermissionsAndroid.PERMISSIONS.CALL_PHONE,
  readSms: PermissionsAndroid.PERMISSIONS.READ_SMS,
  receiveSms: PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
}
