import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

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

export const buttonStyle = css`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 0.8rem;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
  color: white;
  background: linear-gradient(to top, #7892c2 5%, #0061c9 100%);
  align-self: center;
  position: relative;
  left: -65%;
  bottom: -40%;
  border-radius: 1rem;
  z-index: 20;
  &:hover {
    background-color: #0061c9;
    background: #0061c9;
  }
  &:active {
    bottom: -39.8%;
  }
`;

const MovieCard = ({ title, plot, poster }) => {
  return (
    <div css={cardStyle}>
      <img src={poster} alt={title} css={posterStyle}></img>
      <button css={buttonStyle}>Reservar</button>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieCard;
