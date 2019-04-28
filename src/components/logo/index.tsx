import React from 'react'
import { Image } from 'react-native'

const style = {
  width: 100,
  height: 13,
}

class Logo extends React.Component {
  render () {
    return (
      <Image
        source={require('@/resources/images/logo.png')}
        style={style}
      />
    )
  }
}

export default Logo
