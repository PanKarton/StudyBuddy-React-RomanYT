import React from 'react';
// import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-button-icon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
