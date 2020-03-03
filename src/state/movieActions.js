import axios from 'axios';
import { BASE_URL } from './index';

const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
const FILTER_BY_DATE = 'FILTER_BY_DATE';
const CREATE_MOVIE = 'CREATE_MOVIE';
const SHOW_NEW_MOVIE_MODAL = 'SHOW_NEW_MOVIE_MODAL';
const SHOW_SPINNER = 'SHOW_SPINNER';

const getAllMoviesTask = response => ({
  type: GET_ALL_MOVIES,
  payload: response.data.movies,
});

const filterByDateTask = data => ({
  type: FILTER_BY_DATE,
  payload: data.movies,
});

const createMovieTask = () => ({
  type: CREATE_MOVIE,
});

const setShowModalTask = data => ({
  type: SHOW_NEW_MOVIE_MODAL,
  payload: data,
});

const setShowSpinnerTask = value => ({
  type: SHOW_SPINNER,
  payload: value,
});
const getAllMovies = () => dispatch =>
  axios.get(`${BASE_URL}/movies`).then(response => {
    dispatch(getAllMoviesTask(response));
  }, console.error);

const filterByDate = showtime => dispatch => {
  axios.get(`${BASE_URL}/projections/filter/${showtime}`).then(
    response => {
      dispatch(filterByDateTask(response.data));
    },
    () => {
      console.error;
      dispatch(filterByDateTask({ movies: [] }));
    },
  );
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

const setShowSpinner = (value = undefined) => dispatch => {
  return dispatch(setShowSpinnerTask(value));
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
  SHOW_SPINNER,
  setShowSpinner,
};
