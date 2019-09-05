import * as React from 'react';
import { View, Spinner as SpinnerComponent } from 'native-base';

import { CommonStyles, Colors } from '@/resources/styles';

export interface OuterProps {
  size?: 'large' | 'small';
}

const Spinner: React.FC<OuterProps> = ({ size = 'large' } = {}) => {
  return (
    <View style={[CommonStyles.centralize, CommonStyles.flex]}>
      <SpinnerComponent color={Colors.cerulean} size={size} />
    </View>
  );
};

export default Spinner;
