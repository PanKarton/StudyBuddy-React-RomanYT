import React from 'react';
import PropTypes from 'prop-types';
import CircleButton from '../CircleButton/CircleButton';
import { Wrapper } from './Note.styles';

const Note = ({ title = 'No title provided', content = 'No content provided' }) => (
  <Wrapper>
    <CircleButton />
    <h4>{title}</h4>
    <p>{content}</p>
  </Wrapper>
);

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Note;
