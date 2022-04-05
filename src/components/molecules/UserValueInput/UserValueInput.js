import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { StyledWrapper } from './UserValueInput.styles';

const UserValueInput = ({ name, id, type, value, handleInputChange }) => (
  <StyledWrapper>
    <Label htmlFor={id}>{name}</Label>
    <Input name={name} id={id} type={type} value={value} onChange={handleInputChange}></Input>
  </StyledWrapper>
);

UserValueInput.propTypes = {};

export default UserValueInput;
