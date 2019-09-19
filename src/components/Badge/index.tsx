import * as React from 'react';
import { Text, View } from 'react-native';
import cn from 'react-native-classnames';

import styles from './styles';

export interface OuterProps {
    style?: any;
    color?: string;
    title?: string;
}

const Badge: React.FC<OuterProps> = ({ style = {}, color = 'green', title, ...props } = {}) => {
  const badgeStyles = cn(styles, 'badge', [color]);

  return (
    <View style={{ ...badgeStyles, ...style }}>
      <Text style={cn(styles, 'title', `title_${color}`)}>{title}</Text>
    </View>
  );
};

export default Badge;
