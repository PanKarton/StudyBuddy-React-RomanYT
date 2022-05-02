import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './Modal.styles';

ModalWrapper.setAppElement(document.getElementById('root'));

const Modal = ({ children, isOpen, handleModalClose }) => {
  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={handleModalClose}>
      {children}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};

export default Modal;
