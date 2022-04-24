import React from 'react';
import PropTypes from 'prop-types';
import CircleButton from 'components/atoms/CircleButton/CircleButton';
import { Wrapper, AverageCircle, UserAndAttendance } from './UsersListItem.styles';
import { UserShape } from 'types';

const UsersListItem = ({ userData: { name, average, attendance } }) => (
  <Wrapper>
    <AverageCircle average={average}>
      <span>{average}</span>
    </AverageCircle>
    <UserAndAttendance>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </UserAndAttendance>
    <CircleButton />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
