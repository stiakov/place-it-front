import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
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

const MoviesContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
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
      <FilterByDateComponent></FilterByDateComponent>
      <MoviesContainer>
        {movies.length > 0 ? (
          movies.length > 0 &&
          movies[0].title !== 'No hay elementos para mostrar' ? (
            movies.map(item => (
              <MovieCard
                key={item.title}
                title={item.title}
                plot={item.plot}
                poster={item.poster}
              />
            ))
          ) : (
            <h1>No hay elementos para mostrar</h1>
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
