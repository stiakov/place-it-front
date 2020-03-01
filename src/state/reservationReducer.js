import {
  GET_ALL_RESERVATIONS,
  FILTER_BY_ID_NUMBER,
  CREATE_RESERVATION,
  SHOW_NEW_RESERVATION_MODAL,
} from './reservationActions';

const reservationReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_RESERVATIONS:
      return { ...state, all: payload };
    case FILTER_BY_ID_NUMBER:
      return { ...state, all: payload };
    case SHOW_NEW_RESERVATION_MODAL:
      return { ...state, showModalNew: payload };
    case CREATE_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default reservationReducer;
