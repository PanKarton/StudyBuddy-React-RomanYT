import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => (
  <ViewWrapper>
    <StyledTitle>Users list</StyledTitle>
    <StyledList>
      {users.map((userData, index) => (
        <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser}></UsersListItem>
      ))}
    </StyledList>
  </ViewWrapper>
);

export default UsersList;
