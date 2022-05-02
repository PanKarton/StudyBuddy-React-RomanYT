import React from 'react';
import { GradeInfo, GradesSectionWrapper } from './GradesList.styles';
import { StyledSectionTitle } from 'components/organisms/StudentInfoModal/StudentInfoModal.styles';
import { AverageCircle } from '../UsersListItem/UsersListItem.styles';
const GradesList = ({ subjectsGrades }) => (
  <GradesSectionWrapper>
    <StyledSectionTitle>
      <strong>Average Grades:</strong>
    </StyledSectionTitle>

    {subjectsGrades.map(({ subject, grade }, index) => (
      <GradeInfo key={index}>
        <p>{subject}</p>
        <AverageCircle average={grade}>
          <span>{grade}</span>
        </AverageCircle>
      </GradeInfo>
    ))}
  </GradesSectionWrapper>
);

GradesList.propTypes = {};

export default GradesList;
