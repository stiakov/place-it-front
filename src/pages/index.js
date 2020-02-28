import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAllMovies } from '../state/movieActions';
const IndexPage = ({ movies }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <Layout>
      <SEO
        title="Películas"
        keywords={['cinema', 'booking', 'films', 'reserva', 'cine', 'films']}
      />
      <h1>Películas</h1>
      {movies.length > 0
        ? movies.map(post => <pre>{JSON.stringify(post, null, 2)}</pre>)
        : 'loading'}
    </Layout>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.all,
});
export default connect(mapStateToProps, null)(IndexPage);
