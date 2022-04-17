import { Input } from 'components/atoms/Input/Input';
import React from 'react';
import { StyledWrapper, UserInfo } from './SearchBar.styles';

const SearchBar = (props) => (
  <StyledWrapper>
    <UserInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </UserInfo>
    <Input placeholder="Find student..." />
  </StyledWrapper>
);

SearchBar.propTypes = {};

export default SearchBar;
