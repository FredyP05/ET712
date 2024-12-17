// Buttton2.js
import React, { useState } from 'react';
import iphone16black from "../images/iphone16_black.webp";
import iphone16teal from "../images/iphone16_teal.webp";
import iphone16ultra from "../images/iphone16_ultramarine.webp";
import iphone16bt from "../images/iphone16bt.webp";
import iphone16dt from "../images/iphone16dt.webp";
import iphone16nt from "../images/iphone16nt.webp";
import Modal from './modalwindow'; // import the modal component

const Buttton2 = function() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(null);

  // Function to open the modal with the clicked image
  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc(null);
  };

  return (
    <>
      <header className='title'>
        <h1>iPhone</h1>
      </header>

      <section className='iphone-section'>
        <img src={iphone16black} onClick={() => openModal(iphone16black)} />
        <img src={iphone16teal} onClick={() => openModal(iphone16teal)} />
        <img src={iphone16ultra} onClick={() => openModal(iphone16ultra)} />
        <img src={iphone16bt} onClick={() => openModal(iphone16bt)} />
        <img src={iphone16dt} onClick={() => openModal(iphone16dt)} />
        <img src={iphone16nt} onClick={() => openModal(iphone16nt)} />
      </section>

      <Modal isOpen={isModalOpen} imageSrc={modalImageSrc} closeModal={closeModal} />
    </>
  );
}

export default Buttton2;
