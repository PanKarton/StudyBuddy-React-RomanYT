import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { StyledWrapper } from './UserValueInput.styles';

const UserValueInput = ({ name, id, type, value, handleInputChange }) => (
  <StyledWrapper>
    <Label htmlFor={id}>{id}</Label>
    <Input name={name} id={id} type={type} value={value} onChange={handleInputChange}></Input>
  </StyledWrapper>
);

UserValueInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default UserValueInput;
