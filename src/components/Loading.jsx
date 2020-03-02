import React from 'react';
import { css } from '@emotion/core';

const Loading = () => {
  return (
    <div
      css={css`
        margin-top: 9rem;
        display: flex;
        justify-items: center;
        vertical-align: center;
        flex-flow: column nowrap;
      `}
    >
      <div>
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <h4>Cargando</h4>
    </div>
  );
};

export default Loading;
