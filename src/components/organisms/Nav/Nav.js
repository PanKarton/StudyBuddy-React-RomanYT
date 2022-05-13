import React, { useContext } from 'react';
import { MainLogo } from 'components/atoms/MainLogo/MainLogo';
import { StyledList, StyledNav, StyledLink } from './Nav.styles';
import { useAuth } from 'hooks/useAuth';
import { useActualGroup } from 'hooks/useActualGroup';

const Nav = () => {
  const group = useActualGroup();
  const { signOut } = useAuth();

  return (
    <StyledNav>
      <MainLogo>
        <h1>Study Buddy</h1>
      </MainLogo>
      <StyledList>
        <StyledLink to={`/group/${group.actualGroup}`}>Dashboard</StyledLink>
        <StyledLink to="/notes">Notes</StyledLink>
        <StyledLink to="/asdasd">Settings</StyledLink>
        <StyledLink as={'a'} onClick={signOut}>
          Logout
        </StyledLink>
      </StyledList>
    </StyledNav>
  );
};

Nav.propTypes = {};

export default Nav;
