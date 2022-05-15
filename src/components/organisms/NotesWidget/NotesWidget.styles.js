import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  right: -30vw;
  top: 10vh;
  border: 3px solid ${({ theme }) => theme.colors.darkGrey};
  border-right: none;
  width: 30vw;
  min-height: 11vh;
  transition: transform 0.2s ease-in-out;
  &.active {
    transform: translateX(-100%);
  }
`;

export const NotesList = styled.ul`
  margin: 0;
  padding: 2rem;
  max-height: 70vh;
  overflow-y: scroll;
  & > * + * {
    margin-top: 2rem;
  }
`;

export const WidgetHandler = styled.button`
  position: absolute;
  left: -3.5rem;
  top: 2rem;
  width: 5rem;
  height: 2rem;
  background-color: #555;
  border: none;
  padding: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  cursor: pointer;
  margin: 0;
  transform: rotate(-90deg);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
