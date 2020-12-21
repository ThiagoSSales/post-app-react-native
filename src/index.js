import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import storeConfig from '~/store/storeConfig';

import Routes from '~/routes';
const store = storeConfig();
const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
