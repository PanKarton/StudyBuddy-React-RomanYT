import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users.js';
import { Wrapper } from './UsersList.styles';

const UsersList = (props) => (
  <Wrapper>
    {users.map((userData) => (
      <UsersListItem key={userData.name} userData={userData}>
        {' '}
      </UsersListItem>
    ))}
  </Wrapper>
);

export default UsersList;
