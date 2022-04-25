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
    width: 100%;
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

export const SearchWrapper = styled.div`
  width: min(100%, 30rem);
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const SearchResults = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  border-top: transparent;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow-y: scroll;
  overflow-y: overlay;
  max-height: 40vh;
  & > * + *::after {
    content: '';
    position: absolute;
    top: 0;
    left: calc(50%);
    width: calc(100% - 2rem);
    height: 0;
    transform: translateX(-50%);
    border-top: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  }
`;
export const UserCell = styled.li`
  width: inherit;
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightGrey : theme.colors.white)};
  padding-inline: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin: 0;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  &:first-child {
    padding-top: 1rem;
  }
  &:last-child {
    padding-bottom: 1rem;
  }
`;
