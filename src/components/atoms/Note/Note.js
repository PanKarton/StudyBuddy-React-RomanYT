import React from 'react';
import PropTypes from 'prop-types';
import CircleButton from '../CircleButton/CircleButton';
import { Wrapper } from './Note.styles';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store/features/notes/notesSlice';

const Note = ({ title = 'No title provided', content = 'No content provided', id }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = (data) => dispatch(removeNote(id));

  return (
    <Wrapper>
      <CircleButton onClick={() => handleRemoveNote(id)} />
      <h4>{title}</h4>
      <p>{content}</p>
    </Wrapper>
  );
};

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Note;
