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
          <Icon name="apps" />
        </Button>

        <Button active={currentRoute === 'Details'} onPress={() => NavigationService.navigate('Details')}>
          <Icon name="camera" />
        </Button>

        {/*
        <Button>
          <Icon active name="navigate" />
        </Button>
        */}

        <Button active={currentRoute === 'Login'} onPress={() => NavigationService.navigate('Login')}>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </FooterZone>
  );
}

export default observer(Footer);
