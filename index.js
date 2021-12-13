/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import  allReducers  from './redux/reducers';
import { createStore } from 'redux';
import React from 'react';

const store = createStore(allReducers);

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);