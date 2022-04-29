import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalWindow, ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('portal');

const Modal = ({ children }) => {
  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return createPortal(
    <ModalWindow>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalWindow>,
    modalContainer,
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};

export default Modal;
