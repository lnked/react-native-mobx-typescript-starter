import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '@/screens/welcome/welcome';

describe('<WelcomeScreen />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<WelcomeScreen />).toJSON();
    console.log('welcome', rendered);
    expect(rendered).toBeTruthy();
  });
});
