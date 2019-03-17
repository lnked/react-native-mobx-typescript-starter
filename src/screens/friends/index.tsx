import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface Props {}
interface State {}

export default class Friends extends React.Component<any, any> {
  render() {
    const { navigation, ...props } = this.props

    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        <Text>props: {JSON.stringify(props)}</Text>

        <Button
          title='Back to home'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfcf0',
  },
})
