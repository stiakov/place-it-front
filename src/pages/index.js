import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAllMovies, setShowNewMovieModal } from '../state/movieActions';
import MovieCard from '../components/MovieCard';
import { SectionHeader } from '../components/sectionHeader';
import Modalizer from '../components/Modalizer';
import Loading from '../components/Loading';
import NewMovieForm from '../components/NewMovieForm';

const MoviesContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`;

const addButtonStyles = css`
  font-size: 0.8rem;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
  color: white;
  background: linear-gradient(to top, #7892c2 5%, #007cfd 100%);
  border-radius: 1rem;
  z-index: 2;

  &:hover {
    background-color: #007cfd;
    background: #007cfd;
  }
  &:active {
    bottom: -39.8%;
  }
`;

const IndexPage = ({ movies, showModal }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const AddMovie = () => {
    const handleClick = () => {
      dispatch(setShowNewMovieModal(true));
    };

    return (
      <button type="submit" onClick={handleClick} css={addButtonStyles}>
        ┼ &nbsp; Nueva Película
      </button>
    );
  };

  const NewMovieModal = () => (
    <Modalizer>
      <NewMovieForm />
    </Modalizer>
  );

  return (
    <Layout>
      <SEO
        title="Películas"
        keywords={['cinema', 'booking', 'films', 'reserva', 'cine', 'films']}
      />
      <SectionHeader title="Películas" extra={<AddMovie />} />
      {showModal ? <NewMovieModal /> : null}
      <MoviesContainer>
        {movies.length > 0 ? (
          movies.map(item => (
            <MovieCard
              key={item.title}
              title={item.title}
              plot={item.plot}
              poster={item.poster}
            />
          ))
        ) : (
          <Loading />
        )}
      </MoviesContainer>
    </Layout>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.all,
  showModal: state.movies.showModalNew,
});

export default connect(mapStateToProps, null)(IndexPage);
