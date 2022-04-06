import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import AddUserForm from 'components/organisms/AddUserForm/AddUserForm';
import { UserShape } from 'types';

const AddUser = ({ newUserInputData, handleInputChange, addUser }) => (
  <ViewWrapper as="form" onSubmit={addUser}>
    <AddUserForm newUserInputData={newUserInputData} handleInputChange={handleInputChange} addUser={addUser} />
  </ViewWrapper>
);

AddUser.propTypes = {
  newUserInputData: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func,
  addUser: PropTypes.func,
};

export default AddUser;
