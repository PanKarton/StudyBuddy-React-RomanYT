import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper } from './AddNoteForm.styles';
import { useDispatch } from 'react-redux';
import { addNote } from 'store';

const AddNoteForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleAddNote = (data) => {
    if (!data.title || !data.content) return setError('Fill input fields dude...');
    setError('');
    dispatch(addNote(data));
  };

  useEffect(() => {
    if (error) return;
    reset({
      title: '',
      content: '',
    });
  }, [isSubmitSuccessful, reset, error]);

  return (
    <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
      <FormField label="Title" name="title" id="title" {...register('title')} />
      <FormField label="Note" name="content" id="content" isTextarea {...register('content')} />
      <Button>Add</Button>
      {error && <p>{error}</p>}
    </FormWrapper>
  );
};

AddNoteForm.propTypes = {};

export default AddNoteForm;
