import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import App from './src/App';

import storeConfig from './src/store/storeConfig';

import Axios from 'axios';
Axios.defaults.baseURL = 'https://lambe-93400.firebaseio.com/';

const store = storeConfig();
const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(Redux);
