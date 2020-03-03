import React from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import {
  filterByDate,
  getAllMovies,
  setShowSpinner as setShowSpinnerMovies,
} from '../../state/movieActions';
import {
  filterByDate as filterReservationsByDate,
  getAllReservations,
  setShowSpinner as setShowSpinnerReservations,
} from '../../state/reservationActions';
import { filterButtonStyles } from '../sharedStyles';

const FilterByDateComponent = ({ code, dispatch }) => {
  const handleReset = e => {
    e.preventDefault();
    document.getElementById('date-filter-input').value = null;
    if (code === 'reservations') {
      dispatch(setShowSpinnerReservations());
      dispatch(getAllReservations());
    } else {
      dispatch(setShowSpinnerMovies());
      dispatch(getAllMovies());
    }
  };

  const handleFilterChange = e => {
    e.preventDefault();
    if (code === 'reservations') {
      dispatch(filterReservationsByDate(e.target.value));
      dispatch(setShowSpinnerReservations());
    } else {
      dispatch(setShowSpinnerMovies());
      dispatch(filterByDate(e.target.value));
    }
  };

  return (
    <form
      css={css`
        max-width: 27rem;
        min-width: 27rem;
        margin: 0;
        @media (max-width: 576px) {
          margin-left: 1rem;
          margin-bottom: 1rem;
        }
      `}
    >
      <div
        css={css`
          max-width: 27rem;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-evenly;
          vertical-align: center;
          @media (max-width: 576px) {
            justify-content: left;
            max-width: 20rem !important;
          }
        `}
      >
        <label
          css={css`
            margin-top: 0;
            @media (max-width: 576px) {
              margin-right: 1rem;
            }
          `}
          htmlFor="showtime"
        >
          Seleccionar fecha
        </label>
        <input
          css={css`
            height: 26px;
            max-width: 11rem;
          `}
          id="date-filter-input"
          name="showtime"
          type="date"
          onChange={e => handleFilterChange(e)}
        />
        <button
          css={filterButtonStyles}
          type="submit"
          onClick={e => handleReset(e)}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  filter: state.movies.filter,
});

export default connect(mapStateToProps, null)(FilterByDateComponent);
