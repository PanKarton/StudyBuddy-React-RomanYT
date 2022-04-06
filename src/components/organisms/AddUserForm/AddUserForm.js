import React from 'react';
import PropTypes from 'prop-types';
import UserValueInput from 'components/molecules/UserValueInput/UserValueInput';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/Title';

const AddUserForm = ({ newUserInputData: { name, attendance, average }, handleInputChange, addUser, type = 'text' }) => (
  <>
    <StyledTitle>Add student</StyledTitle>
    <UserValueInput id="Name" name="name" type={type} value={name} handleInputChange={handleInputChange} />
    <UserValueInput id="Attendance" name="attendance" type={type} value={attendance} handleInputChange={handleInputChange} />
    <UserValueInput id="Average" name="average" type={type} value={average} handleInputChange={handleInputChange} />
    <Button type="submit">Add</Button>
  </>
);

AddUserForm.propTypes = {
  newUserInputData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
  }),
  type: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default AddUserForm;
