import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from 'components/atoms/Title/Title';
import { ErrorWindow } from './ErrorMessage.styles';

const baseMessage = 'Program failed, try to fix or something, idk.';

const ErrorMessage = ({ message = baseMessage }) => (
  <ErrorWindow>
    <StyledTitle>Ooops!</StyledTitle>
    <p>{message}</p>
  </ErrorWindow>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
