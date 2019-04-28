import { Dimensions, Platform, StatusBar } from 'react-native'

export const isIPhoneXSize = (dim: any): boolean =>
  (dim.height === 812) || (dim.width === 812)

export const isIPhoneXrSize = (dim: any): boolean =>
  (dim.height === 896) || (dim.width === 896)

export const isIphoneX = (): boolean => {
  const dim = Dimensions.get('window')

  return (
    // This has to be iOS
    Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  )
}

export const isIphoneXStyle = <T, U>(iphoneXStyle: T, regularStyle: U): T | U => {
  if (isIphoneX()) {
    return iphoneXStyle
  }

  return regularStyle
}

export const getStatusBarHeight = (safe?: boolean): number => {
  return Platform.select({
    ios: isIphoneXStyle(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
  })
}

export const getBottomSpace = (): number => {
  return isIphoneX() ? 34 : 0
}

export default isIphoneX
