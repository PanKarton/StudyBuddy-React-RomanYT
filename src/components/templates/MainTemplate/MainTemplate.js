import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/organisms/Nav/Nav';
import { StyledMain, Wrapper } from './MainTemplate.styles';
import SearchBar from '../../organisms/SearchBar/SearchBar';
import News from 'views/News/News';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Nav />
    <StyledMain>
      <SearchBar />
      {children}
      <News />
    </StyledMain>
  </Wrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.element,
};

export default MainTemplate;
