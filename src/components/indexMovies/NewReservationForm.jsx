import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import {
  createReservation,
  setShowNewReservationModal,
} from '../../state/reservationActions';
import {
  addButtonStyles,
  cancelButtonStyles,
  blockStyles,
} from '../sharedStyles';

const NewReservationForm = ({ movie }) => {
  const dispatch = useDispatch();
  console.log('El componente se ha lanzado ->', movie.title);

  const submitCreation = data => {
    dispatch(createReservation(data));
  };

  const cancelCreation = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setShowNewReservationModal(false));
  };

  const composeValidators = (...validators) => value =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    );

  const required = value => (value ? undefined : 'Requerido');
  const emailValidator = str => {
    const pattern = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return pattern.test(str) ? undefined : 'Correo electrónico incorrecto';
  };

  return (
    <Form
      onSubmit={values => submitCreation({ ...values, ...movie })}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <h3>Reservar</h3>
          <Field name="name" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Nombre</label>
                <input
                  {...input}
                  type="text"
                  placeholder="Ingrese su nombre completo"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="id_number" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Cédula</label>
                <input
                  {...input}
                  type="text"
                  placeholder="Ingrese su número de cédula"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="mobile" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Celular</label>
                <input
                  {...input}
                  type="text"
                  placeholder="Ingrese su número de celular"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <label>Fechas disponibles</label>
          <Field name="showtime" component="select" validate={required}>
            <option />
            {movie.projections.map(item => (
              <option value={item.showtime} key={item.showtime}>
                {item.reservations
                  ? item.reservations.length < 10
                    ? `${item.showtime} - ${10 -
                        item.reservations.length} disponibles`
                    : `${item.showtime} - No disponible`
                  : 'HAA'}
              </option>
            ))}
          </Field>
          <Field
            name="email"
            validate={composeValidators(required, emailValidator)}
          >
            {({ input, meta }) => (
              <div>
                <label>Correo electrónico</label>
                <input
                  {...input}
                  type="text"
                  placeholder="Ingrese su correo electrónico"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div css={blockStyles} className="buttons">
            <button type="submit" css={addButtonStyles}>
              ┼ &nbsp; Guardar
            </button>
            <button
              css={cancelButtonStyles}
              type="cancel"
              onClick={e => cancelCreation(e)}
              type="button"
            >
              Cancelar
            </button>
          </div>
          {/* <pre>{JSON.stringify({ ...values, ...movie }, null, 2)}</pre> */}
        </form>
      )}
    />
  );
};

const mapStateToProps = state => ({
  movies: state.reservations.all,
  showModal: state.reservations.showModalNew,
});

export default connect(mapStateToProps, null)(NewReservationForm);
