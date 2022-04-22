import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { StyledHeader } from 'views/Dashboard/DashBoard.styles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
  & > * {
    margin: 0;
  }
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }
`;

const GroupList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
  li {
    padding-block: 0.5rem;
    width: 100%;
    text-align: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightPurpleHover};
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

const GroupModal = ({ groups }) => (
  <StyledWrapper>
    <StyledHeader>Select a group</StyledHeader>
    <p>Group</p>
    <GroupList>
      {groups.map((group, index) => (
        <li>
          <Link key={group} to={`/group/${group}`}>
            {group}
          </Link>
        </li>
      ))}
    </GroupList>
    <Button>Select</Button>
  </StyledWrapper>
);

GroupModal.propTypes = {};

export default GroupModal;
