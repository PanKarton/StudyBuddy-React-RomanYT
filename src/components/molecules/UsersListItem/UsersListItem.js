import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
import AverageCircle from 'components/atoms/AverageCircle/AverageCircle';

const UsersListItem = ({ userData: { name, average, attendance } }) => (
  <Wrapper>
    <AverageCircle average={average}></AverageCircle>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <Button />
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
