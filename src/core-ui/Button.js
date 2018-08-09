// @flow

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type Props = {
  text: string,
  onPress: (value?: number) => void,
};

export default function Button(props: Props) {
  let {text, onPress} = props;
  let {buttonStyle} = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
};
