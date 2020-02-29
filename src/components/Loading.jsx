import React from 'react';
import { css } from '@emotion/core';

const Loading = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-items: center;
      `}
    >
      <img
        src="https://media.giphy.com/media/cJN8BKhgBSos8sDRHP/giphy.gif"
        alt="loading..."
        css={css`
          @media (max-width: 576px) {
            width: 90%;
            height: auto;
          }
          @media (min-width: 768px) {
            width: 70%;
            height: auto;
          }

          @media (min-width: 992px) {
            width: 80%;
            height: auto;
          }

          @media (min-width: 1200px) {
            width: 100%;
            height: auto;
          }
        `}
      />
    </div>
  );
};

export default Loading;
