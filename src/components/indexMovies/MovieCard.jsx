import React, { useState, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Modalizer from '../Modalizer';
import NewReservationForm from './NewReservationForm';
import { setShowNewReservationModal } from '../../state/reservationActions';

const cardStyle = css`
  display: flex;
  justify-items: center;
  min-height: 100%;
  margin-top: 1rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-bottom: 0;
  box-shadow: 1px 5px;
  border-radius: 1.5%;

  -webkit-box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 576px) {
    width: 100%;
    margin: 0.3rem;
  }
  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 992px) {
    width: 30%;
  }

  @media (min-width: 1200px) {
    width: 22%;
  }
`;

const posterStyle = css`
  min-height: 100%;
  border-radius: 1.5%;
  margin-bottom: 0;
`;

const buttonStyle = css`
  font-size: 0.8rem;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
  color: white;
  background: linear-gradient(to top, #7892c2 5%, #007cfd 100%);
  align-self: center;
  position: relative;
  left: -65%;
  bottom: -40%;
  border-radius: 1rem;
  z-index: 2;
  &:hover {
    background-color: #007cfd;
    background: #007cfd;
  }
  &:active {
    bottom: -39.8%;
  }
`;

const MovieCard = ({
  id,
  title,
  plot,
  poster,
  projections,
  showModal,
  dispatch,
}) => {
  const [showMe, setShowMe] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setShowNewReservationModal(true));
    setTimeout(() => setShowMe(true), 10);
  };

  useEffect(() => {
    return () => {
      setShowMe(false);
    };
  }, [showModal]);

  const NewReservationModal = () => (
    <Modalizer>
      <NewReservationForm movie={{ id, title, plot, poster, projections }} />
    </Modalizer>
  );
  return (
    <>
      <div css={cardStyle}>
        <img src={poster} alt={title} css={posterStyle}></img>
        <button css={buttonStyle} onClick={e => handleClick(e)}>
          Reservar
        </button>
      </div>
      {showMe && showModal ? <NewReservationModal /> : null}
    </>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showModal: state.reservations.showModalNew,
});

export default connect(mapStateToProps, null)(MovieCard);
