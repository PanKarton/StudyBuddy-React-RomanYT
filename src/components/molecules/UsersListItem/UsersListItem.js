import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, AverageCircle, UserAndAttendance } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, index, userData: { name, average, attendance } }) => (
  <Wrapper>
    <AverageCircle average={average}>
      <span>{average}</span>
    </AverageCircle>
    <UserAndAttendance>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </UserAndAttendance>
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string,
  }),
};

export default UsersListItem;
