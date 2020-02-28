import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const Reservations = ({ showtime }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Reservas</h1>
    </Layout>
  );
};

Reservations.propTypes = {
  showtime: PropTypes.string.isRequired,
};

export default Reservations;
