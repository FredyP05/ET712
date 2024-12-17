import React from 'react';
import '../App.css'; 

const Modal = ({ isOpen, imageSrc, closeModal }) => {
  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Phone" className="modal-image" />
        <button className="close-button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

