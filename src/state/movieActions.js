import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
const SHOW_NEW_MOVIE_MODAL = 'SHOW_NEW_MOVIE_MODAL';
const CREATE_MOVIE = 'CREATE_MOVIE';

const setShowModalTask = data => ({
  type: SHOW_NEW_MOVIE_MODAL,
  payload: data,
});

const getAllMoviesTask = response => ({
  type: GET_ALL_MOVIES,
  payload: response.data,
});

const createMovieTask = () => ({
  type: CREATE_MOVIE,
});

const setShowNewMovieModal = value => dispatch => {
  dispatch(setShowModalTask(value));
};

const getAllMovies = () => dispatch =>
  axios.get(`${BASE_URL}/movies`).then(response => {
    dispatch(getAllMoviesTask(response));
  }, console.error);

const createMovie = data => dispatch => {
  axios.post(`${BASE_URL}/movies`, data).then(response => {
    dispatch(createMovieTask(response));
    dispatch(getAllMovies());
    dispatch(setShowModalTask(false));
  }, console.error);
};

export {
  GET_ALL_MOVIES,
  getAllMovies,
  SHOW_NEW_MOVIE_MODAL,
  setShowNewMovieModal,
  CREATE_MOVIE,
  createMovie,
};
