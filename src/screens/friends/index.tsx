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

class FriendsScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: Props) => {
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

export default FriendsScreen
