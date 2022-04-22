import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '0.75rem 2.5rem' : '.5rem 1.25rem')};
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurpleHover};
  }
`;
