import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  border-top: transparent;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  & > * + *::after {
    content: '';
    position: absolute;
    top: 0;
    left: calc(50%);
    width: calc(100% - 2rem);
    height: 0;
    transform: translateX(-50%);
    border-top: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  }
`;
export const UserCell = styled.div`
  width: inherit;
  padding-inline: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin: 0;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  &:first-child {
    padding-top: 1rem;
  }
  &:last-child {
    padding-bottom: 1rem;
  }
`;
