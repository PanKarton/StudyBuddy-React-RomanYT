import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 9.5rem 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const StyledMain = styled.main`
  grid-column: 2/4;
  grid-row: 1/3;
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  grid-template-rows: 110px 1fr;
  overflow-x: scroll;
`;
