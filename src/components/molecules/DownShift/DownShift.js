import React from 'react';
import { StyledWrapper, UserCell } from './DownShift.styles';
import PropTypes from 'prop-types';

const DownShift = ({ students = [] }) => {
  return (
    <StyledWrapper>
      {students.map(({ id, name }) => (
        <UserCell key={id}>{name}</UserCell>
      ))}
    </StyledWrapper>
  );
};

DownShift.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      attendance: PropTypes.string,
      average: PropTypes.string,
      group: PropTypes.string,
    }),
  ),
};

export default DownShift;
