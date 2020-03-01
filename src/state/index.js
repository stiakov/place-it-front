import { combineReducers } from 'redux';
import app from './app';
import movieReducer from './movieReducer';

export const BASE_URL = 'http://localhost:3000';

export default combineReducers({
  app,
  movies: movieReducer,
});
