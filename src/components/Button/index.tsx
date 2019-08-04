import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Spinner } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '@/resources/styles';

import styles from './styles';

export interface OuterProps {
  text: string;
  style: any;
  theme: string;
  loading: boolean;
  disabled: boolean;
  onPress: () => void;
}

export interface InnerState {}

class Button extends Component<OuterProps, InnerState> {

  onPress = () => this.props.onPress();

  theme = () => {
    const { theme } = this.props;

    if (theme === 'light') {
      return [Colors.white, Colors.white];
    }

    if (theme === 'transparent') {
      return [Colors.white20, Colors.white20];
    }

    if (theme === 'secondary') {
      return [Colors.paleGrey80, Colors.paleGrey];
    }

    return [Colors.deepSkyBlue, Colors.cerulean];
  }

  render () {
    const disabled = this.props.loading || this.props.disabled;
    const { text, theme, style, loading } = this.props;

    return (
      <View style={[style, !!disabled && styles.disabled]}>
        <TouchableOpacity disabled={disabled} onPress={this.onPress} activeOpacity={0.6}>
          <LinearGradient style={styles.btn} colors={this.theme()} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            {loading ? (
              <Spinner color="white" size="small" />
            ) : (
              <Text style={[styles.btnText, styles[`btn${theme}`]]}>{text}</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Button;
