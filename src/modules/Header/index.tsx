import * as React from 'react';
import { Header as HeaderZone, Button, Icon, Text } from 'native-base';

const Header = () => (
  <HeaderZone>
    <Button transparent>
      <Icon name="ios-arrow-back" />
    </Button>

    <Text>Header</Text>

    <Button transparent>
      <Icon name="ios-menu" />
    </Button>
  </HeaderZone>
);

export default Header;
