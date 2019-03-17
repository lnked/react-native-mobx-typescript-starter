import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

import LogoTitle from '@/components/logo'

import { styles } from './styles'

interface Props {
  navigation: any;
}

interface State {}

export default class FriendsScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      title: navigation.getParam('otherParam', 'A Nested Friends Screen'),
    }
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>

        <Button
          title='Back to home'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    )
  }
}
