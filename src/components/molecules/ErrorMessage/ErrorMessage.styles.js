import styled, { keyframes } from 'styled-components';
import { StyledTitle } from 'components/atoms/Title/Title';

const shrinkAnimation = keyframes`
    from{
        transform: translateX(-50%) scaleX(1);
    }
    to{
        transform: translateX(-50%) scaleX(0);
    }
`;

const slideAnimation = keyframes`
from{
    transform: translateX(-50%) translateY(200%);
}
to{
    transform: translateX(-50%) translateY(0);
}
`;

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
`;

export const ErrorWindow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  width: 30rem;
  height: 10rem;
  border: 3px solid red;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-inline: 2rem;
  gap: 1rem;
  animation: ${slideAnimation} 0.5s ease-in, ${slideAnimation} 0.5s 6s reverse forwards;

  ${StyledTitle}, p {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.error};
  }

  ${StyledTitle} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.error};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    width: 4rem;
    height: 0.375rem;
    border-radius: 1000px;
  }

  &::before {
    background-color: ${({ theme }) => theme.colors.error};
  }
  &::after {
    background-color: red;
    transform-origin: left center;
    animation: ${shrinkAnimation} 5s 1s linear forwards;
  }
`;
