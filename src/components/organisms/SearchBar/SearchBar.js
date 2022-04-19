import { Input } from 'components/atoms/Input/Input';
import React from 'react';
import { StyledWrapper, UserInfo } from './SearchBar.styles';
import styled from 'styled-components';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

const Downshift = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  border-top: transparent;
  background-color: white;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  & > * + *::after {
    content: '';
    position: absolute;
    width: calc(100% - 2rem);
    height: 0;
    left: calc(50%);
    top: 0;
    transform: translateX(-50%);
    border-top: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  }
`;
const UserName = styled.div`
  width: inherit;
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

const SearchWrapper = styled.div`
  width: min(100%, 30rem);
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const SearchBar = (props) => (
  <StyledWrapper>
    <UserInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </UserInfo>
    <SearchWrapper>
      <Input placeholder="Find student..." />
      <Downshift>
        <UserName>Arek Cep</UserName>
        <UserName>Miriamcia Buk</UserName>
        <UserName>Nana Czup</UserName>
        <UserName>Cicia Wredota</UserName>
      </Downshift>
    </SearchWrapper>
  </StyledWrapper>
);

SearchBar.propTypes = {};

export default SearchBar;
