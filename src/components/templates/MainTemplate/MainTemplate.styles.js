import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 9.5rem 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
