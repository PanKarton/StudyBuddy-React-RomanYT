import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  height: 100%;
  background-color: transparent;
  border-right: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 3rem;
  grid-column: 1/2;
  grid-row: 1/3;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  padding-right: 1.25rem;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 700;
  text-decoration: none;
  position: relative;

  &::after {
    opacity: 0;
    content: '';
    position: absolute;
    width: 1rem;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.grey};
    right: 0;
    top: 50%;
    transform: translate(1.25rem, -50%);
    transition: all 0.1s ease-in-out;
  }

  &.active::after {
    opacity: 1;
  }
`;
