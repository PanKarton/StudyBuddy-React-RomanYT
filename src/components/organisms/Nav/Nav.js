import React from 'react';
import PropTypes from 'prop-types';

import { MainLogo } from 'components/atoms/MainLogo/MainLogo';
import { StyledList, StyledNav, StyledLink } from './Nav.styles';

const Nav = ({ studentsListLink, addStudentLink }) => (
  <StyledNav>
    <MainLogo>
      <h1>Study Buddy</h1>
    </MainLogo>
    <StyledList>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/addStudent">Add student</StyledLink>
      {/* <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink> */}
    </StyledList>
  </StyledNav>
);

Nav.propTypes = {};

export default Nav;