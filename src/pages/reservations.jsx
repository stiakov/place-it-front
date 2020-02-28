import React from 'react';
import PropTypes from 'prop-types';
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
