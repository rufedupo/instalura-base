import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './styles/ModalWrapper';

const Modal = ({ isOpen, onClose, children }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(event) => {
      const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
      // isOpen = false;
      if (!isSafeArea) {
        onClose();
      }
    }}
  >
    {children({
      'data-modal-safe-area': 'true',
    })}
  </ModalWrapper>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;