import {
  GET_ALL_MOVIES,
  FILTER_BY_DATE,
  SHOW_NEW_MOVIE_MODAL,
  CREATE_MOVIE,
} from './movieActions';

const movieReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES:
      console.log('all ', payload)
      return { ...state, all: payload };
    case FILTER_BY_DATE:
      console.log(payload)
      let movies = payload.map(item => item.movie);
      let projections = payload.map(item => item.projections);
      movies =
        movies.length > 0
          ? movies
          : [
              {
                title: 'No hay elementos para mostrar',
                poster: 'https://i.imgur.com/v7fzWHO.jpg',
                plot: '',
              },
            ];
      return { ...state, all: movies, projections };
    case SHOW_NEW_MOVIE_MODAL:
      return { ...state, showModalNew: payload };
    case CREATE_MOVIE:
      return state;
    default:
      return state;
  }
};

export default movieReducer;
