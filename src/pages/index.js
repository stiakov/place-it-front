import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAllMovies } from '../state/movieActions';
import MovieCard from '../components/MovieCard';

const MoviesContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`;

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
      <MoviesContainer>
        {movies.length > 0
          ? movies.map(item => (
              <MovieCard
                title={item.title}
                plot={item.plot}
                poster={item.poster}
              />
            ))
          : 'loading'}
      </MoviesContainer>
    </Layout>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.all,
});
export default connect(mapStateToProps, null)(IndexPage);
