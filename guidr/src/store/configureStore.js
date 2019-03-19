import { createStore, combineReducers } from 'redux';
import tripsReducer from '../reducers/trips';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      trips: tripsReducer,
      filters: filtersReducer
    })
  );

  return store;
};
