import { useState } from 'react';
import Modal from 'components/molecules/Modal/Modal';

export const useModal = (initialState = false) => {
  const [isModalOpen, setisModalOpen] = useState(initialState);

  const handleModalOpen = () => {
    setisModalOpen(true);
  };
  const handleModalClose = (e) => {
    setisModalOpen(false);
  };

  return {
    Modal,
    isModalOpen,
    handleModalClose,
    handleModalOpen,
  };
};
