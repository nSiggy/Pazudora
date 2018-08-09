// @flow

import React from 'react';
import {Text} from 'react-native';

type Props = {
  text: string,
};

export default function Button(props: Props) {
  let {text} = props;
  return <Text> {text} </Text>;
}

const styles = {
  buttonStyle: {
    backgroundColor: 'grey',
    borderRadius: 100,
  },
};
