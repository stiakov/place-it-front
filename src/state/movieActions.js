import axios from 'axios';
import { BASE_URL } from './index';

const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
const FILTER_BY_DATE = 'FILTER_BY_DATE';
const CREATE_MOVIE = 'CREATE_MOVIE';
const SHOW_NEW_MOVIE_MODAL = 'SHOW_NEW_MOVIE_MODAL';

const getAllMoviesTask = response => ({
  type: GET_ALL_MOVIES,
  payload: response.data,
});

const filterByDateTask = data => ({
  type: FILTER_BY_DATE,
  payload: data,
});

const createMovieTask = () => ({
  type: CREATE_MOVIE,
});

const setShowModalTask = data => ({
  type: SHOW_NEW_MOVIE_MODAL,
  payload: data,
});

const getAllMovies = () => dispatch =>
  axios.get(`${BASE_URL}/movies`).then(response => {
    dispatch(getAllMoviesTask(response));
  }, console.error);

const filterByDate = showtime => dispatch => {
  axios.get(`${BASE_URL}/projections/filter/${showtime}`).then(response => {
    dispatch(filterByDateTask(response.data));
  }, console.error);
};

const createMovie = data => dispatch => {
  axios.post(`${BASE_URL}/movies`, data).then(response => {
    dispatch(createMovieTask(response));
    dispatch(getAllMovies());
    dispatch(setShowModalTask(false));
  }, console.error);
};

const setShowNewMovieModal = value => dispatch => {
  dispatch(setShowModalTask(value));
};

export {
  GET_ALL_MOVIES,
  getAllMovies,
  SHOW_NEW_MOVIE_MODAL,
  setShowNewMovieModal,
  CREATE_MOVIE,
  createMovie,
  FILTER_BY_DATE,
  filterByDate,
};
