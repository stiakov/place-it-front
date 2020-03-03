import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { SectionHeader } from '../components/sectionHeader';
import FilterByDateComponent from '../components/indexMovies/FilterByDate';
import { getAllReservations } from '../state/reservationActions';
import Loading from '../components/Loading';

const Reservations = ({ reservations }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllReservations());
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="Reservaciones" />
      <SectionHeader title="Reservas realizadas" />
      <FilterByDateComponent></FilterByDateComponent>
      <div className="tbl-header table-scrollable-x">
        <table id="tbl-container" cellPadding={0} cellSpacing={0} border={0}>
          <thead>
            <tr>
              <th>Película</th>
              <th className="hide-on-mobile  hide-on-tablet">Fecha</th>
              <th>Cliente</th>
              <th className="hide-on-mobile">Cédula</th>
              <th>Celular</th>
              <th className="hide-on-mobile hide-on-tablet">Email</th>
            </tr>
          </thead>
        </table>
      </div>

      <table cellPadding={0} cellSpacing={0} border={0}>
        <tbody>
          {reservations && reservations.length > 0 ? (
            reservations.map(({ id, user, projection }) => (
              <tr key={id}>
                <td>{projection.movie.title}</td>
                <td className="hide-on-mobile  hide-on-tablet">
                  {projection.showtime}
                </td>
                <td>{user.name}</td>
                <td className="hide-on-mobile">{user.id_number}</td>
                <td>{user.mobile}</td>
                <td className="hide-on-mobile hide-on-tablet">{user.email}</td>
              </tr>
            ))
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
    </Layout>
  );
};

Reservations.propTypes = {
  showtime: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  reservations: state.reservations.all,
  showModal: state.reservations.showModalNew,
});

export default connect(mapStateToProps, null)(Reservations);
