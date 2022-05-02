import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalWrapper = styled(Modal)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;
