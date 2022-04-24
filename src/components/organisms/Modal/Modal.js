import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalWindow, ModalWrapper } from './Modal.styles';

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalWindow>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalWindow>,
    document.getElementById('portal'),
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};

export default Modal;
