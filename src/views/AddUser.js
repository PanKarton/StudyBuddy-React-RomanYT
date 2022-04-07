import React, { useContext, useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UserValueInput from 'components/molecules/UserValueInput/UserValueInput';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [newUserInputData, setNewUserInputData] = useState(initialState);
  const { name, attendance, average } = newUserInputData;

  const context = useContext(UsersContext);

  const handleInputChange = (e) => {
    setNewUserInputData({
      ...newUserInputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    context.addUser(newUserInputData);
    setNewUserInputData(initialState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add student</StyledTitle>
      <UserValueInput id="Name" name="name" value={name} handleInputChange={handleInputChange} />
      <UserValueInput id="Attendance" name="attendance" value={attendance} handleInputChange={handleInputChange} />
      <UserValueInput id="Average" name="average" value={average} handleInputChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
