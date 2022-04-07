import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = ({ users }) => {
  const context = useContext(UsersContext);

  return (
    <>
      <StyledTitle>Users list</StyledTitle>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem key={userData.name} userData={userData} deleteUser={context.deleteUser}></UsersListItem>
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
