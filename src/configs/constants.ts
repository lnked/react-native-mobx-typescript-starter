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
