import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const ZeroContent = () => {
  return (
    <h1
      css={css`
        margin-top: 5rem;
        text-align: center;
      `}
    >
      No hay elementos para mostrar
    </h1>
  );
};

ZeroContent.propTypes = {
  text: PropTypes.string,
};

ZeroContent.default = {
  text: 'No hay elementos para mostrar',
};

export default ZeroContent;
