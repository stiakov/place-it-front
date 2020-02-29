import { GET_ALL_MOVIES } from './movieActions';

const movieReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES:
      return { ...state, all: payload };
    default:
      return state;
  }
};

export default movieReducer;
