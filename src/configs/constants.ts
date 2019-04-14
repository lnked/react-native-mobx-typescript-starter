import { Dimensions, StatusBar, Platform } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const androidNavBarHeight = 48
export const androidStatusBarHeight = StatusBar.currentHeight || 24

export const deviceWidth = width
export const deviceHeight = height

export const ios = Platform.OS === 'ios'
export const android = Platform.OS === 'android'

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
