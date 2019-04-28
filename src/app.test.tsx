import * as React from 'react'
import { render } from 'react-native-testing-library'

import App from './app'

describe('tsx <App />', () => {
  const rendered = render(<App />)
  console.log('app', rendered)

  it('renders without crashing', () => {
    expect(rendered).toBeTruthy()
  })
})