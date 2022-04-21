import React from 'react';
import { StyledWrapper, UserCell } from './DownShift.styles';

const DownShift = ({ students }) => {
  return (
    <StyledWrapper>
      {students.map(({ id, name }) => (
        <UserCell key={id}>{name}</UserCell>
      ))}
    </StyledWrapper>
  );
};

export default DownShift;
