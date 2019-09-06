import * as React from 'react';
import { Input as NativeInput, Label, Item } from 'native-base';

import styles from './styles';

export interface OuterProps {
    style?: string;
    label?: string;
    placeholder?: string;
}

const Input: React.FC<OuterProps> = ({ label, placeholder, style, ...props } = {}) => {
  return (
    <Item style={[styles.formItem, style]} floatingLabel>
      <Label style={styles.inputLabelPlaceholder}>
        {label || placeholder}
      </Label>

      <NativeInput {...props} style={styles.input} />
    </Item>
  );
};

export default Input;
