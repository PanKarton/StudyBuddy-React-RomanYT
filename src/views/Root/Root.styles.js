import styled from 'styled-components';

export const StyledWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  grid-column: 1/2;
  grid-row: 2/3;
  padding-left: 11rem;
`;
