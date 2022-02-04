import React from 'react';
import { Provider } from 'react-redux';
import TransferList from './options/TransferList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <TransferList />
  </Provider>
);

export default App;
