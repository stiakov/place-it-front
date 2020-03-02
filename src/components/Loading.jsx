import React from 'react';
import { css } from '@emotion/core';

const loadingStyles = css`
  margin-top: 9rem;
  display: flex;
  justify-items: center;
  vertical-align: center;
  flex-flow: column nowrap;
`;

const sendingStyles = css`
  display: flex;
  justify-content: center;
  vertical-align: center;
  flex-flow: row nowrap;
`;

const LoadingSpinner = () => (
  <div css={loadingStyles}>
    <div>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <h4>Cargando</h4>
  </div>
);

const SendingSpinner = () => (
  <div css={sendingStyles}>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

const Loading = ({ sending = false }) => {
  return <>{!sending ? <LoadingSpinner /> : <SendingSpinner />}</>;
};

export default Loading;
