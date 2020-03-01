import { combineReducers } from 'redux';
import app from './app';
import movieReducer from './movieReducer';
import reservationReducer from './reservationReducer';

export const BASE_URL = 'http://localhost:3000';

export default combineReducers({
  app,
  movies: movieReducer,
  reservations: reservationReducer,
});
