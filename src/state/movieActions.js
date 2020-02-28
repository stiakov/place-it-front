import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const GET_ALL_MOVIES = 'GET_ALL_MOVIES';

const getAllMoviesTask = response => ({
  type: GET_ALL_MOVIES,
  payload: response.data,
});

const getAllMovies = () => dispatch =>
  axios.get(`${BASE_URL}/movies`).then(
    response => {
      console.log(response)
      dispatch(getAllMoviesTask(response));
    },
    error => errorLogger(error, dispatch),
  );

export { GET_ALL_MOVIES, getAllMovies };
