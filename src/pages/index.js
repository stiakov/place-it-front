import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAllMovies } from '../state/movieActions';
import MovieCard from '../components/MovieCard';
import { SectionHeader } from '../components/sectionHeader';

const MoviesContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`;

const addButtonStyles = css`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 0.8rem;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
  color: white;
  background: linear-gradient(to top, #7892c2 5%, #0061c9 100%);
  border-radius: 1rem;
  z-index: 20;

  &:hover {
    background-color: #0061c9;
    background: #0061c9;
  }
  &:active {
    bottom: -39.8%;
  }
`;

const AddMovie = () => (
  <button css={addButtonStyles}>┼ &nbsp; Nueva Película</button>
);

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
      <SectionHeader title="Películas" extra={<AddMovie />} />
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
