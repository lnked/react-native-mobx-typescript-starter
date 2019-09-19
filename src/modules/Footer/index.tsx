import * as React from 'react';
import { observer } from 'mobx-react';
import { Footer as FooterZone, FooterTab, Button, Icon } from 'native-base';

import * as stores from '@/stores';
import NavigationService from '@/navigation/NavigationService';

// import styles from './styles';

const Footer = () => {
  const currentRoute = stores.app.getRoute;

  return(
    <FooterZone>
      <FooterTab>
        <Button active={currentRoute === 'Home'} onPress={() => NavigationService.navigate('Home')}>
          <Icon name="basket" />
        </Button>

        <Button active={currentRoute === 'Details'} onPress={() => NavigationService.navigate('Details')}>
          <Icon name="wallet" />
        </Button>

        <Button active={currentRoute === 'Login'} onPress={() => NavigationService.navigate('Login')}>
          <Icon name="pie" />
        </Button>

        <Button active={currentRoute === 'Settings'} onPress={() => NavigationService.navigate('Settings')}>
          <Icon name="cog" />
        </Button>
      </FooterTab>
    </FooterZone>
  );
}

export default observer(Footer);
