import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import { filterByDate, getAllMovies } from '../state/movieActions';
import { addButtonStyles } from './sharedStyles';

const FilterByDateComponent = ({ filter }) => {
  const dispatch = useDispatch();

  const handleReset = e => {
    e.preventDefault();
    document.getElementById('date-filter-input').value = null;
    dispatch(getAllMovies());
  };

  const handleFilterChange = e => {
    e.preventDefault();
    dispatch(filterByDate(e.target.value));
  };

  return (
    <form>
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
        `}
      >
        <label htmlFor="showtime">Seleccionar fecha</label>
        <input
          css={css`
            max-width: 15rem;
          `}
          id="date-filter-input"
          name="showtime"
          type="date"
          onChange={e => handleFilterChange(e)}
        />
        <button
          css={addButtonStyles}
          type="submit"
          onClick={e => handleReset(e)}
        >
          RESET
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  filter: state.movies.filter,
});

export default connect(mapStateToProps, null)(FilterByDateComponent);
