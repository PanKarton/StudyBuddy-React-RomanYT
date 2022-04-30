import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const ModalWindow = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.25);
  z-index: 1000;
`;

export const ModalWrapper = styled(ViewWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  max-height: 70vh;
  width: auto;
`;
