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
//   location: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   camera: PermissionsAndroid.PERMISSIONS.CAMERA,
//   microphone: PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//   contacts: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//   event: PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
//   storage: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//   photo: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//   callPhone: PermissionsAndroid.PERMISSIONS.CALL_PHONE,
//   readSms: PermissionsAndroid.PERMISSIONS.READ_SMS,
//   receiveSms: PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
// };
