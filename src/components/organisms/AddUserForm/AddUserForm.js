import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UserValueInput from 'components/molecules/UserValueInput/UserValueInput';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from '../UsersList/UsersList.styles';

const AddUserForm = ({ newUserInputData: { name, attendance, average }, handleInputChange, addUser }) => (
  <ViewWrapper as="form" onSubmit={addUser}>
    <StyledTitle>Add student</StyledTitle>
    <UserValueInput id="name" name="name" type="text" value={name} handleInputChange={handleInputChange} />
    <UserValueInput id="attendance" name="attendance" type="text" value={attendance} handleInputChange={handleInputChange} />
    <UserValueInput id="average" name="average" type="text" value={average} handleInputChange={handleInputChange} />
    <Button type="submit">Add</Button>
  </ViewWrapper>
);

AddUserForm.propTypes = {};

export default AddUserForm;
