import { createStackNavigator } from 'react-navigation'

import stackNavigatorConfig from './config'

import MainScreen from '@/screens/MainScreen'
import LoginScreen from '@/screens/LoginScreen'
import SignupScreen from '@/screens/SignupScreen'
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen'
import ResetPasswordScreen from '@/screens/ResetPasswordScreen'

const AuthStack = createStackNavigator(
  {
    main: { screen: MainScreen, path: 'main' },
    login: { screen: LoginScreen, path: 'login' },
    signup: { screen: SignupScreen, path: 'signup' },
    forgotPassword: { screen: ForgotPasswordScreen, path: 'forgotPassword' },
    resetPassword: { screen: ResetPasswordScreen, path: 'resetPassword' }
  },
  stackNavigatorConfig
)

export default AuthStack
