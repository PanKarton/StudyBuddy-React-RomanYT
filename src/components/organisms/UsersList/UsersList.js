import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users.js';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;
export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const UsersList = (props) => (
  <ViewWrapper>
    <StyledList>
      <StyledTitle>Users list</StyledTitle>
      {users.map((userData, index) => (
        <UsersListItem key={userData.name} userData={userData} index={index}></UsersListItem>
      ))}
    </StyledList>
  </ViewWrapper>
);

export default UsersList;
