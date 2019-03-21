import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addTrip } from './actions/trips';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addTrip({ title: 'A Long-expected Party', date: 20032019, location: 'The Moon', duration: 10, type: 'Hiking', profOrPlea: 'Pleasure', description: 'test' }));
store.dispatch(addTrip({ title: 'The Shadow of the Past', date: 20092019, location: 'The Moon', duration: '2 weeks', type: 'Back Packing', profOrPlea: 'professional', description: 'test' }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

