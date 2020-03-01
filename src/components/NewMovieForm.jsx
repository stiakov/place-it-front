import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import {
  Form,
  TextField,
  SubmitField,
  CheckboxField,
} from 'react-components-form';
import Schema from 'form-schema-validation';
import { DateRange } from 'react-date-range';
import { createMovie, setShowNewMovieModal } from '../state/movieActions';
import {
  addButtonStyles,
  cancelButtonStyles,
  blockStyles,
} from './sharedStyles';

const NewMovieForm = () => {
  const dispatch = useDispatch();

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const ErrorMessages = {
    validateRequired(key) {
      return `'${key}' requerido`;
    },
  };
  const createMovieSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      plot: {
        type: String,
        required: true,
      },
      poster: {
        type: String,
        required: true,
      },
      Confirmar: {
        type: Boolean,
        required: true,
      },
    },
    ErrorMessages,
  );

  const submitCreation = data => dispatch(createMovie(data));

  const cancelCreation = () => dispatch(setShowNewMovieModal(false));

  return (
    <Form
      schema={createMovieSchema}
      onSubmit={model => submitCreation({ ...model, dates })}
      onError={(errors, data) => console.log('error', errors, data)}
    >
      <h3>Crear película</h3>
      <div>
        <TextField
          name="title"
          label="Título"
          type="text"
          placeholder="Ingrese el título"
        />
        <TextField
          name="plot"
          label="Sinopsis"
          type="text"
          placeholder="Ingrese la sinopsis"
        />
        <TextField
          name="poster"
          label="Poster"
          type="text"
          placeholder="Ingrese la url del poster"
        />
      </div>

      <div>
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
      </div>
      <div css={blockStyles}>
        <CheckboxField name="Confirmar" />
        <label htmlFor="Confirmar">Confirmo que los datos son correctos</label>
      </div>
      <div css={blockStyles}>
        <SubmitField css={addButtonStyles} value="┼ &nbsp; Guardar" />
        <button
          css={cancelButtonStyles}
          type="cancel"
          onClick={() => cancelCreation()}
        >
          Cancelar
        </button>
      </div>
    </Form>
  );
};

export default NewMovieForm;
