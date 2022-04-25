import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
  & > * {
    margin: 0;
  }
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }
`;

export const GroupList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
  overflow-y: scroll;
  overflow-y: overlay;
  max-height: 40vh;
  li {
    padding-block: 0.5rem;
    width: 100%;
    text-align: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightPurpleHover};
      cursor: pointer;
    }
    p {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;
