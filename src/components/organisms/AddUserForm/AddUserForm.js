import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UserValueInput from 'components/molecules/UserValueInput/UserValueInput';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from '../UsersList/UsersList';

const AddUserForm = (props) => (
  <ViewWrapper as="form">
    <StyledTitle>Add student</StyledTitle>
    <UserValueInput id="name" name="Name" type="text" />
    <UserValueInput id="attendance" name="Attendance" type="text" />
    <UserValueInput id="average" name="Average" type="text" />
    <Button type="submit">Add</Button>
  </ViewWrapper>
);

AddUserForm.propTypes = {};

export default AddUserForm;
