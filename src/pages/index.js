import React, { useEffect, memo } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAllMovies, setShowNewMovieModal } from '../state/movieActions';
import MovieCard from '../components/indexMovies/MovieCard';
import { SectionHeader } from '../components/sectionHeader';
import Modalizer from '../components/Modalizer';
import Loading from '../components/Loading';
import NewMovieForm from '../components/indexMovies/NewMovieForm';
import { addButtonStyles } from '../components/sharedStyles';
import FilterByDateComponent from '../components/indexMovies/FilterByDate';
import ZeroContent from '../components/indexMovies/ZeroContent';

const MoviesContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`;

const IndexPage = ({ movies, showModal, dispatch }) => {
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
  const MemoizedCard = memo(MovieCard);

  return (
    <Layout>
      <SEO
        title="Películas"
        keywords={['cinema', 'booking', 'films', 'reserva', 'cine', 'films']}
      />
      <SectionHeader title="Películas" extra={<AddMovie />} />
      <FilterByDateComponent code="movies"></FilterByDateComponent>
      <MoviesContainer>
        {movies ? (
          movies.length > 0 ? (
            movies.map(item => {
              return (
                <MemoizedCard
                  key={item.title}
                  id={item.id}
                  title={item.title}
                  plot={item.plot}
                  poster={item.poster}
                  projections={item.projections}
                />
              );
            })
          ) : (
            <ZeroContent />
          )
        ) : (
          <Loading />
        )}
      </MoviesContainer>
      {showModal ? <NewMovieModal /> : null}
    </Layout>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.all,
  showModal: state.movies.showModalNew,
});

export default connect(mapStateToProps, null)(IndexPage);
