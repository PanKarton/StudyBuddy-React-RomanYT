import React from 'react';
import { GradeInfo, GradesSectionWrapper } from './GradesList.styles';
import { StyledSectionTitle } from 'components/organisms/StudentInfoModal/StudentInfoModal.styles';
import { AverageCircle } from '../UsersListItem/UsersListItem.styles';
const GradesList = (props) => (
  <GradesSectionWrapper>
    <StyledSectionTitle>
      <strong>Average Grades:</strong>
    </StyledSectionTitle>
    <GradeInfo>
      <p>Modern economy</p>
      <AverageCircle>
        <span>5</span>
      </AverageCircle>
    </GradeInfo>
    <GradeInfo>
      <p>Trade and logistics</p>
      <AverageCircle>
        <span>4</span>
      </AverageCircle>
    </GradeInfo>
    <GradeInfo>
      <p>Majma</p>
      <AverageCircle>
        <span>2.5</span>
      </AverageCircle>
    </GradeInfo>
  </GradesSectionWrapper>
);

GradesList.propTypes = {};

export default GradesList;
