import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 1rem;
`;

const Title = styled.div`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 1.5rem;
`;

export const SectionHeader = ({ title, extra }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {extra}
    </Container>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  extra: PropTypes.any,
};

SectionHeader.defaultProps = { extra: '' };
