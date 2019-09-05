import * as React from 'react';
import { Image } from 'react-native';

const style = {
  width: 100,
  height: 13,
};

export interface OuterProps {}

const Logo: React.FC<OuterProps> = ({ ...props } = {}) => {
  return (
    <Image
      source={require('@/resources/images/logo.png')}
      style={style}
    />
  );
};

export default Logo;
