import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 2rem;
  aspect-ratio: 1;
  background-color: ${({ average }) =>
    average <= 4 ? (average < 4 ? `#CB8581` : `#E1D888`) : `#8FCB81`};
  border-radius: 50%;
  display: grid;
  place-items: center;
  span {
    font-size: 12px;
    font-weight: 400;
    color: white;
  }
`;
