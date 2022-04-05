import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;
