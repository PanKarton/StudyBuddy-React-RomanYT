import styled from 'styled-components';

export const MainLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  h1 {
    text-align: right;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
    display: block;
    width: min-content;
  }
`;
