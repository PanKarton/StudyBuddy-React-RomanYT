import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max(1.75rem, auto) 1fr;
  grid-template-columns: 1.75rem 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
  h4,
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  h4 {
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 1;
  }
  p {
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
  }
`;
