import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const StyledWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  padding-left: 3rem;

  ${Input} {
    width: min(100%, 30rem);
    height: 2.75rem;
    border-color: ${({ theme }) => theme.colors.mainLineColor};
    padding-left: 1rem;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 700;
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
      font-weight: 400;
    }
  }
`;

export const UserInfo = styled.div`
  p {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
