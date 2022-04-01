import styled from 'styled-components';

export const Wrapper = styled.div`
  width: min(30rem, 100%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 1.5rem 1.5rem 2.75rem;
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
  & > * + * {
    border-top: 1px solid #ddd;
  }
`;
