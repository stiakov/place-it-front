import { combineReducers } from 'redux';
import app from './app';
import movieReducer from './movieReducer';

export default combineReducers({ app, movies: movieReducer });
