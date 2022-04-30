import styled from 'styled-components';

export const GradeInfo = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 1rem;
  padding-block: 0.5rem;
  p {
    margin: 0;
  }
`;

export const GradesSectionWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GradesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
