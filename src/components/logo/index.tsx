import React from 'react'
import { Image } from 'react-native'

export default class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('@/resources/images/logo.png')}
        style={{ width: 100, height: 13 }}
      />
    )
  }
}
