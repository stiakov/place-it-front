import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FullScreenModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 400vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 3;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: first baseline;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: white;
  padding: 2rem;
  z-index: 5;
  top: 64px;
`;
const Modalizer = ({ children }) => {
  return (
    <>
      <FullScreenModal isOpen="ok" contentLabel="Minimal Modal Example">
        <ModalContainer>{children}</ModalContainer>
      </FullScreenModal>
    </>
  );
};

Modalizer.propTypes = {};

export default Modalizer;
