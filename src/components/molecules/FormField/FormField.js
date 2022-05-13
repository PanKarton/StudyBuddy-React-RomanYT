import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { StyledWrapper } from './FormField.styles';

const FormField = React.forwardRef(({ label, name, id, type = 'text', value, handleInputChange, isTextarea, ...props }, ref) => (
  <StyledWrapper>
    <Label htmlFor={id}>{label}</Label>
    {isTextarea ? (
      <textarea name={name} id={id} type={type} value={value} onChange={handleInputChange} {...props} ref={ref} />
    ) : (
      <Input name={name} id={id} type={type} value={value} onChange={handleInputChange} {...props} ref={ref}></Input>
    )}
  </StyledWrapper>
));

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default FormField;
