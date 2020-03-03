import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import rootReducer from '.';

const initState = {
  movies: {
    all: undefined,
    showModalNew: false,
  },
  reservations: {
    all: undefined,
    showModalNew: false,
  },
};

const devTools =
  typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    initState,
    compose(applyMiddleware(thunk), devTools),
  );

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
