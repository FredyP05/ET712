// Button3.js
import React, { useState } from 'react';
import android1 from "../images/01_SDSAC-8028-GalaxyS24FE_Blue_Front_RGB-1600x1200.webp";
import android2 from "../images/01_SDSAC-8028-GalaxyS24FE_Mint_Front_RGB-1600x1200.webp";
import android3 from "../images/1_SM-A256B_BlueBlack_Back_Front-1600x1200.webp";
import android4 from "../images/1_SDSAC-7229-SM-A356_Galaxy-A35_Awesome-Navy_Lockup-1600x1200.webp";
import android5 from "../images/galaxy-s24-ultra-highlights-color-titanium-black-back.jpg";
import android6 from "../images/galaxy-s24-ultra-highlights-color-titanium-violet-back.jpg";
import Modal from './modalwindow'; // import the modal component

const Button3 = function() {
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
        <h1>Android</h1>
      </header>

      <section className='iphone-section'>
        <img src={android1} onClick={() => openModal(android1)} />
        <img src={android2} onClick={() => openModal(android2)} />
        <img src={android3} onClick={() => openModal(android3)} />
        <img src={android4} onClick={() => openModal(android4)} />
        <img src={android5} onClick={() => openModal(android5)} />
        <img src={android6} onClick={() => openModal(android6)} />
      </section>

      <Modal isOpen={isModalOpen} imageSrc={modalImageSrc} closeModal={closeModal} />
    </>
  );
}

export default Button3;
