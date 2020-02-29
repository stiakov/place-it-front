import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FullScreenModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: calc(100vh - ${p => p.theme.zIndex.header});
  background-color: blue;
  z-index: 3;
`;

const Modalizer = props => {
  return (
    <FullScreenModal isOpen="ok" contentLabel="Minimal Modal Example">
      <button onClick="ok">Close Modal</button>
    </FullScreenModal>
  );
};

Modalizer.propTypes = {};

export default Modalizer;
