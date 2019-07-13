import * as React from 'react';
import { render } from 'react-native-testing-library';

import App from './';

describe('<App />', () => {
  let rendered: any = null;

  beforeAll(() => {
    rendered = render(<App />);
  });

  it('renders without crashing', () => {
    expect(rendered).toBeTruthy();
  });
});
