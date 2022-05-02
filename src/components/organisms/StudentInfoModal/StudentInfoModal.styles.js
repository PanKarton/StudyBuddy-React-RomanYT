import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { AverageCircle } from 'components/molecules/UsersListItem/UsersListItem.styles';
import styled from 'styled-components';

export const StyledWrapper = styled(ViewWrapper)`
  padding-inline: 3rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  width: 40rem;
  height: 70vh;
  position: relative;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  ${Button} {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;

export const StudentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${AverageCircle} {
    width: 10%;
    span {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 0;
  }
`;

export const StyledSectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.xm};
  margin: 0;
`;

export const CourseInfo = styled.div`
  padding-top: 2rem;
  & > * {
    margin: 0;
  }
  ${StyledSectionTitle} {
    margin-bottom: 0.25rem;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
