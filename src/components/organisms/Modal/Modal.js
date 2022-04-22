import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

const ModalWindow = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.25);
  z-index: 1000;
`;

const ModalWrapper = styled(ViewWrapper)`
  padding: 2rem 0;
  width: min(25rem, 100%);
`;

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalWindow>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalWindow>,
    document.getElementById('portal'),
  );
};

Modal.propTypes = {};

export default Modal;
