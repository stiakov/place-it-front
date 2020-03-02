import React from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/core';
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

const movieTemplate = {
  title: 'ohh no',
  plot: 'ohh no',
  poster: 'ohh no',
};

const NewReservationForm = (movie = movieTemplate) => {
  const dispatch = useDispatch();
  console.log('El componente se ha lanzado ->', movie);

  const submitCreation = data => dispatch(createReservation(data));
  const cancelCreation = () => dispatch(setShowNewReservationModal(false));

  const composeValidators = (...validators) => value =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    );

  const required = value => (value ? undefined : 'Requerido');
  const emailValidator = str => {
    const pattern = RegExp(`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`);
    return pattern.test(str) || 'Correo electrónico incorrecto';
  };

  return (
    <Form
      onSubmit={values => submitCreation({ ...values, dates })}
      render={({ handleSubmit }) => (
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
          <label
            css={css`
              margin-top: 0.7rem;
            `}
          >
            Seleccione las fechas
          </label>
          <div css={blockStyles}>
            <Field
              name="Confirmar"
              component="input"
              type="checkbox"
              validate={required}
            />
            <label htmlFor="Confirmar">
              Confirmo que los datos son correctos
            </label>
          </div>
          <div css={blockStyles} className="buttons">
            <button type="submit" css={addButtonStyles}>
              ┼ &nbsp; Guardar
            </button>
            <button
              css={cancelButtonStyles}
              type="cancel"
              onClick={() => cancelCreation()}
              type="button"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default NewReservationForm;
