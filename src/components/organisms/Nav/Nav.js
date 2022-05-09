import React, { useContext } from 'react';
import { MainLogo } from 'components/atoms/MainLogo/MainLogo';
import { StyledList, StyledNav, StyledLink } from './Nav.styles';
import { GroupContext } from 'providers/ActualGroupProvider';
import { useAuth } from 'hooks/useAuth';

const Nav = () => {
  const { actualGroup } = useContext(GroupContext);
  const { signOut } = useAuth();

  return (
    <StyledNav>
      <MainLogo>
        <h1>Study Buddy</h1>
      </MainLogo>
      <StyledList>
        <StyledLink to={`/group/${actualGroup}`}>Dashboard</StyledLink>
        <StyledLink to="/addStudent">Add student</StyledLink>
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
