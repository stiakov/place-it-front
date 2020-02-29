import React from 'react';
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

const createMovieSchema = new Schema({
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
});

const NewMovieForm = () => {
  return (
    <Form
      schema={createMovieSchema}
      onSubmit={model => console.log(model)}
      onError={(errors, data) => console.log('error', errors, data)}
    >
      <TextField name="title" label="Título" type="text" />
      <TextField name="plot" label="Sinopsis" type="tel" />
      <TextField name="poster" label="Poster" type="text" />
      <TextField name="dates" label="Fechas" type="text" />
      <SubmitField value="Submit" />
    </Form>
  );
};

export default NewMovieForm;
