import React, { useState } from 'react';
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';
import { DateRange } from 'react-date-range';

const NewMovieForm = () => {
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
      dates: {
        type: Array,
        required: true,
      },
    },
    ErrorMessages,
  );

  return (
    <Form
      schema={createMovieSchema}
      onSubmit={model => {
        console.log({ ...model, dates });
      }}
      onError={(errors, data) => console.log('error', errors, data)}
    >
      <h3>Crear película</h3>
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
      <label>
        Seleccione Fechas
        <br />
        <DateRange
          editableDateInputs={true}
          onChange={item => setDates([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dates}
        />
      </label>
      <SubmitField value="Submit" />
    </Form>
  );
};

export default NewMovieForm;
