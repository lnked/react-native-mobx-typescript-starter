import {
  Dimensions,
  Platform,
} from 'react-native';

export const {
  width: deviceWidth,
  height: deviceHeight,
} = Dimensions.get('screen');

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// export const permissionTypes = {
//   event: PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
//   photo: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//   storage: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//   readSms: PermissionsAndroid.PERMISSIONS.READ_SMS,
//   camera: PermissionsAndroid.PERMISSIONS.CAMERA,
//   callPhone: PermissionsAndroid.PERMISSIONS.CALL_PHONE,
//   contacts: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//   location: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   microphone: PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//   receiveSms: PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
// };
