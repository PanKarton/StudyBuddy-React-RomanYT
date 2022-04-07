import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/organisms/Nav/Nav';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Nav />
    {children}
  </Wrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.element,
};

export default MainTemplate;
