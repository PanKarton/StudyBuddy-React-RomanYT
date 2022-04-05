import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  label {
    margin: 0.75rem 0 0.45rem 0;
  }
`;

const UserValueInput = ({ name, id, type }) => (
  <StyledWrapper>
    <Label htmlFor={id}>{name}</Label>
    <Input name={name} id={id} type={type}></Input>
  </StyledWrapper>
);

UserValueInput.propTypes = {};

export default UserValueInput;
