import {
  GET_ALL_MOVIES,
  FILTER_BY_DATE,
  SHOW_NEW_MOVIE_MODAL,
  CREATE_MOVIE,
  SHOW_SPINNER,
} from './movieActions';

const movieReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES:
      return { ...state, all: payload };
    case FILTER_BY_DATE:
      return { ...state, all: payload };
    case SHOW_NEW_MOVIE_MODAL:
      return { ...state, showModalNew: payload };
    case CREATE_MOVIE:
      return state;
    case SHOW_SPINNER:
      return { ...state, all: payload };
    default:
      return state;
  }
};

export default movieReducer;
