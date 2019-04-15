import 'react-native'
import * as React from 'react'
import { App } from '../app'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<App />)
})

test('renders correctly', () => {
  const tree = renderer.create(<App />)
  expect(tree).toBeDefined()
})
