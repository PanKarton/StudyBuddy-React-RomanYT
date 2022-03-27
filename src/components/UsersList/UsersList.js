import React from 'react';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import { users } from 'data/users.js';

const UsersList = (props) => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData}> </UsersListItem>
      ))}
    </ul>
  </div>
);

export default UsersList;
