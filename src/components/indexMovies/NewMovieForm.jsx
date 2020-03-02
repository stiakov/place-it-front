import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import { Form, Field } from 'react-final-form';
import { DateRange } from 'react-date-range';
import { createMovie, setShowNewMovieModal } from '../../state/movieActions';
import {
  addButtonStyles,
  cancelButtonStyles,
  blockStyles,
} from '../sharedStyles';

const NewMovieForm = () => {
  const dispatch = useDispatch();

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const submitCreation = data => dispatch(createMovie(data));
  const cancelCreation = () => dispatch(setShowNewMovieModal(false));
  const required = value => (value ? undefined : 'Requerido');

  return (
    <Form
      onSubmit={values => submitCreation({ ...values, dates })}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <h3>Nueva película</h3>
          <Field name="title" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Título</label>
                <input {...input} type="text" placeholder="Ingrese el título" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="plot" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Sinopsis</label>
                <input
                  {...input}
                  type="text"
                  placeholder="Ingrese la sinopsis"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="poster" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Poster</label>
                <input
                  {...input}
                  type="text"
                  placeholder="Ingrese la url de la imagen"
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
          <DateRange
            css={css`
              margin-top: 0.7rem;
            `}
            editableDateInputs={true}
            onChange={item => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
          />
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
          {/* <pre>{JSON.stringify({ ...values, dates }, 0, 2)}</pre> */}
        </form>
      )}
    />
  );
};

export default NewMovieForm;
