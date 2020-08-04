import React from 'react';
import AppRouter from './src/navigation/Nav';
import { Provider } from 'react-redux';
import Store from './src/utility/redux/Store';

const App = () => {
  return (
          <Provider store={Store}>
            <AppRouter/>
          </Provider>
  );
};
export default App;