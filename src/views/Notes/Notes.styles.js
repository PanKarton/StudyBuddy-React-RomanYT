import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4rem 1fr;
  column-gap: 3rem;
  padding: 3rem;
`;
export const NotesList = styled.ul`
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 0;
  padding: 0;
  & > * + * {
    margin-top: 1.5rem;
  }
`;
