// @flow
import React from 'react';
import {Provider} from 'react-redux';
import createStore from './store/createStore';
import Homepage from './container/Homepage';

export default () => (
  <Provider store={createStore}>
    <Homepage />
  </Provider>
);
