import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

import DeviceInfo from 'react-native-device-info'
import LogoTitle from '@/components/logo'

import { styles } from './styles'

export interface OuterProps {
  navigation: any;
}

class FriendsScreen extends React.Component<OuterProps, {}> {

  static navigationOptions = ({ navigation }: OuterProps) => {
    return {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
      // headerRight: (
      //   <Button
      //     onPress={navigation.getParam('increaseCount')}
      //     title="+1"
      //     color="#fff"
      //   />
      // ),
      title: navigation.getParam('otherParam', 'A Nested Friends Screen'),
    }
  }

  componentDidMount() {
    if (!DeviceInfo.isEmulator()) {
      DeviceInfo.getBatteryLevel().then((level: number) => alert(level))
    }
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        <Text>apiLevel: {DeviceInfo.getBrand()}</Text>
        <Text>phoneNumber: {DeviceInfo.getPhoneNumber()}</Text>

        <Button
          title="Back to home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    )
  }

}

export default FriendsScreen
