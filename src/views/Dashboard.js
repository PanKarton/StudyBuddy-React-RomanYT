import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UserShape } from 'types';

const Dashboard = ({ users, deleteUser }) => (
  <ViewWrapper>
    <UsersList users={users} deleteUser={deleteUser}></UsersList>
  </ViewWrapper>
);

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
