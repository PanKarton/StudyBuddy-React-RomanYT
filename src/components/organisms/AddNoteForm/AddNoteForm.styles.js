import styled from 'styled-components';

export const FormWrapper = styled.form`
  background-color: white;
  grid-column: 1/2;
  grid-row: 2/3;
  padding: 2rem 2rem 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 8px 8px 24px -18px rgba(66, 68, 90, 1);
  input,
  #content {
    width: 100%;
  }
  #content {
    height: 20rem;
    border-radius: 10px;
    padding: 0.5rem;
    resize: none;
    border: 1px solid ${({ theme }) => theme.colors.grey};

    &:focus {
      outline: none;
    }
  }
`;
