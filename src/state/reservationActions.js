import axios from 'axios';
import { BASE_URL } from './index';
import { getAllMovies } from './movieActions';
const GET_ALL_RESERVATIONS = 'GET_ALL_RESERVATIONS';
const FILTER_BY_DATE = 'FILTER_BY_DATE';
const CREATE_RESERVATION = 'CREATE_RESERVATION';
const SHOW_NEW_RESERVATION_MODAL = 'SHOW_NEW_RESERVATION_MODAL';
const SHOW_SPINNER = 'SHOW_SPINNER';

const getAllReservationsTask = response => ({
  type: GET_ALL_RESERVATIONS,
  payload: response.data.reservations,
});

const filterByDateTask = data => ({
  type: FILTER_BY_DATE,
  payload: data.reservations,
});

const createReservationTask = () => ({
  type: CREATE_RESERVATION,
});

const setShowModalTask = data => ({
  type: SHOW_NEW_RESERVATION_MODAL,
  payload: data,
});

const setShowSpinnerTask = value => ({
  type: SHOW_SPINNER,
  payload: value,
});

const getAllReservations = () => dispatch =>
  axios.get(`${BASE_URL}/reservations`).then(response => {
    dispatch(getAllReservationsTask(response));
  }, console.error);

const filterByDate = date => dispatch => {
  axios.get(`${BASE_URL}/reservations/filter/${date}`).then(response => {
    dispatch(filterByDateTask(response.data));
  }, console.error);
};

const createReservation = data => dispatch => {
  axios.post(`${BASE_URL}/reservations`, data).then(response => {
    dispatch(createReservationTask(response));
    dispatch(getAllMovies());
    dispatch(setShowModalTask(false));
  }, console.error);
};

const setShowNewReservationModal = value => dispatch => {
  return dispatch(setShowModalTask(value));
};

const setShowSpinner = (value = undefined) => dispatch => {
  return dispatch(setShowSpinnerTask(value));
};

export {
  GET_ALL_RESERVATIONS,
  FILTER_BY_DATE,
  CREATE_RESERVATION,
  SHOW_NEW_RESERVATION_MODAL,
  SHOW_SPINNER,
  getAllReservations,
  filterByDate,
  createReservation,
  setShowNewReservationModal,
  setShowSpinner,
};
