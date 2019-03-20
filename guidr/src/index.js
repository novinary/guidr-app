import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addTrip } from './actions/trips';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addTrip({ title: 'A Long-expected Party', date: 20032019, location: 'The Moon', duration: 10, type: 'Hiking', profOrPlea: 'Pleasure', description: 'test' }));
store.dispatch(addTrip({ description: 'San Fran' }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

