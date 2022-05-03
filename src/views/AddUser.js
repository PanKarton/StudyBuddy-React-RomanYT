import React, { useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UserValueInput from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/Title';

const initialState = {
  name: '',
  attendance: '',
  average: '',
};

const a = 2;

const AddUser = () => {
  const [newUserInputData, setNewUserInputData] = useState(initialState);
  const { name, attendance, average } = newUserInputData;

  const handleInputChange = (e) => {
    setNewUserInputData({
      ...newUserInputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

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
