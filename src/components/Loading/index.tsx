import * as React from 'react';
import { View, Spinner } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { CommonStyles, Colors } from '@/resources/styles';

export interface OuterProps {}

const Loading: React.FC<OuterProps> = ({ ...props } = {}) => {
  return (
    <LinearGradient
      style={[CommonStyles.flex, CommonStyles.ceruleanContent]}
      colors={[Colors.slate, Colors.darkThree]}
    >
      <View style={[CommonStyles.centralize, CommonStyles.flex]}>
        <Spinner color="white" />
      </View>
    </LinearGradient>
  );
};

export default Loading;
