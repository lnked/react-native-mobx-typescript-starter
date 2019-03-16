import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Home extends React.Component {
  componentDidMount() {
    alert('home')
  }
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Button
          title='Add some friends'
          onPress={() => navigation.navigate('Friends')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
})
