import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Películas"
      keywords={['cinema', 'booking', 'films', 'reserva', 'cine', 'films']}
    />
    <h1>Películas</h1>
  </Layout>
);

export default IndexPage;
