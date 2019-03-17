import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Friends extends React.Component<any, any> {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})
