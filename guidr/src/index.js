import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addTrip } from './actions/trips';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addTrip({ description: 'London' }));
store.dispatch(addTrip({ description: 'San Fran' }));

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
  
  ReactDOM.render(jsx, document.getElementById('root'));

