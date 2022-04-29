import { useState } from 'react';
import Modal from 'components/organisms/Modal/Modal';

export const useModal = (initialState = false) => {
  const [isModalOpen, setisModalOpen] = useState(initialState);

  const handleModalOpen = () => {
    setisModalOpen(true);
  };
  const handleModalClose = () => {
    setisModalOpen(false);
  };

  return {
    Modal,
    isModalOpen,
    handleModalClose,
    handleModalOpen,
  };
};
