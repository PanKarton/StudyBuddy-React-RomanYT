import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 1.75rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverGrey};
  }
  svg {
    width: 80%;
    height: 80%;
    fill: ${({ theme }) => theme.colors.white};
  }
`;
