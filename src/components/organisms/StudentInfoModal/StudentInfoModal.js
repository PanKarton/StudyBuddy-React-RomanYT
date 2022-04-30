import React from 'react';
import PropTypes from 'prop-types';
import { AverageCircle } from 'components/molecules/UsersListItem/UsersListItem.styles';
import CircleButton from 'components/atoms/CircleButton/CircleButton';
import { Button } from 'components/atoms/Button/Button';
import { CourseInfo, StudentInfo, StyledSectionTitle, StyledWrapper } from './StudentInfoModal.styles';
import GradesList from 'components/molecules/GradesList/GradesList';

const StudentInfoModal = ({ isCloseButtonNeeded = true, handleModalClose, student: { name, average } }) => (
  <StyledWrapper>
    <StudentInfo>
      <AverageCircle average={average}>
        <span>{average}</span>
      </AverageCircle>
      <h4>{name}</h4>
      <CircleButton />
    </StudentInfo>
    <div>
      <CourseInfo>
        <StyledSectionTitle>
          <strong>Course:</strong>
        </StyledSectionTitle>
        <p>Economy and finances</p>
      </CourseInfo>
      <GradesList />
      {isCloseButtonNeeded ? <Button onClick={handleModalClose}>Close</Button> : null}
    </div>
  </StyledWrapper>
);

StudentInfoModal.propTypes = {
  isCloseButtonNeeded: PropTypes.bool,
  handleModalClose: PropTypes.func,
};

export default StudentInfoModal;
