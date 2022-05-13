import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper } from './AddNoteForm.styles';

const AddNoteForm = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Title" name="title" id="title" {...register('title')} />
      <FormField label="Note" name="content" id="content" isTextarea {...register('content')} />
      <Button>Add</Button>
    </FormWrapper>
  );
};

AddNoteForm.propTypes = {};

export default AddNoteForm;
