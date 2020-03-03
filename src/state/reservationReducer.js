import {
  GET_ALL_RESERVATIONS,
  FILTER_BY_DATE,
  CREATE_RESERVATION,
  SHOW_NEW_RESERVATION_MODAL,
  SHOW_SPINNER,
} from './reservationActions';

const reservationReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_RESERVATIONS:
      return { ...state, all: payload };
    case FILTER_BY_DATE:
      return { ...state, all: payload };
    case SHOW_NEW_RESERVATION_MODAL:
      return { ...state, showModalNew: payload };
    case CREATE_RESERVATION:
      return state;
    case SHOW_SPINNER:
      return { ...state, all: payload };
    default:
      return state;
  }
};

export default reservationReducer;
