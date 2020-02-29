import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FullScreenModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 3;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(50% - 10%);
  top: 30%;
  background-color: white;
  padding: 2rem;
  z-index: 5;
`;

const Modalizer = ({ children }) => {
  return (
    <>
      <FullScreenModal
        isOpen="ok"
        contentLabel="Minimal Modal Example"
      ></FullScreenModal>
      <ModalContainer>{children}</ModalContainer>
    </>
  );
};

Modalizer.propTypes = {};

export default Modalizer;
