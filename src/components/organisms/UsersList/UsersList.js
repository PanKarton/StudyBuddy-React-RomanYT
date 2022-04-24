import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';

const UsersList = ({ users = [] }) => {
  return (
    <>
      <StyledTitle>Users list</StyledTitle>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem key={userData.name} userData={userData}></UsersListItem>
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
