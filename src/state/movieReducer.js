import {
  GET_ALL_MOVIES,
  SHOW_NEW_MOVIE_MODAL,
  CREATE_MOVIE,
} from './movieActions';

const movieReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES:
      return { ...state, all: payload };
    case SHOW_NEW_MOVIE_MODAL:
      return { ...state, showModalNew: payload };
    case CREATE_MOVIE:
      return { ...state, all: [payload, ...state.all] };
    default:
      return state;
  }
};

export default movieReducer;
