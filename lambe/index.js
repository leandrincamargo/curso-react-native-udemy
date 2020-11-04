import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import Navigator from './src/Navigator';

import storeConfig from './src/store/storeConfig';

const store = storeConfig();
const Redux = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

registerRootComponent(Redux);
