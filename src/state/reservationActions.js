import axios from 'axios';
import { BASE_URL } from './index';

const GET_ALL_RESERVATIONS = 'GET_ALL_RESERVATIONS';
const FILTER_BY_ID_NUMBER = 'FILTER_BY_ID_NUMBER';
const CREATE_RESERVATION = 'CREATE_RESERVATION';
const SHOW_NEW_RESERVATION_MODAL = 'SHOW_NEW_RESERVATION_MODAL';

const getAllReservationsTask = response => ({
  type: GET_ALL_MOVIES,
  payload: response.data,
});

const filterByIdNumberTask = data => ({
  type: FILTER_BY_DATE,
  payload: data,
});

const createReservationTask = () => ({
  type: CREATE_MOVIE,
});

const setShowModalTask = data => ({
  type: SHOW_NEW_RESERVATION_MODAL,
  payload: data,
});

const getAllReservations = () => dispatch =>
  axios.get(`${BASE_URL}/reservations`).then(response => {
    dispatch(getAllReservationsTask(response));
  }, console.error);

const filterByIdNumber = id_number => dispatch => {
  axios.get(`${BASE_URL}/reservations/filter/${id_number}`).then(response => {
    dispatch(filterByIdNumberTask(response.data));
  }, console.error);
};

const createReservation = data => dispatch => {
  axios.post(`${BASE_URL}/movies`, data).then(response => {
    dispatch(createReservationTask(response));
    dispatch(getAllReservations());
    dispatch(setShowModalTask(false));
  }, console.error);
};

const setShowNewReservationModal = value => dispatch => {
  dispatch(setShowModalTask(value));
};

export {
  GET_ALL_RESERVATIONS,
  FILTER_BY_ID_NUMBER,
  CREATE_RESERVATION,
  SHOW_NEW_RESERVATION_MODAL,
  getAllReservations,
  filterByIdNumber,
  createReservation,
  setShowNewReservationModal,
};
